// 二次封装axios
import router from '@/router'
import { useUserStore } from '@/stores'
import axios, { type Method } from 'axios'
import { showToast } from 'vant'
const baseURL = 'xxxxxxxxx'
const instance = axios.create({
  baseURL,
  timeout: 10000
})
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 修改config，比如：修改请求头
    // 获取token===>就是获取user
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)
// 响应拦截器
// 将来  axios.get()
// .then(res=>{ // res 就是后台的数据，之前的res.data })
// .catch(e=>{ // 200+10001这种情况，e就是res.data , 如果是状态吗的错误 401 403 404 e 就错误对象  })
instance.interceptors.response.use(
  (res) => {
    // status 是200是响应成功的，res.data.code 是10000业务成功
    // 如果不是 10000 呢，使用 vant 的轻提示，报错阻断程序
    if (res.data.code !== 10000) {
      showToast(res.data.message || '网络异常')
      return Promise.reject(res.data)
    }
    // 剥离无效数据
    return res.data
  },
  // 401处理
  (err) => {
    if (err.response.status === 401) {
      // 需要删除用户信息
      const store = useUserStore()
      store.delUser()
      // /user/patient?id=1000
      // path  /user/patient  不带查询参数
      // fullPath  /user/patient?id=1000  完整路径
      //   router.push(`/login?returnUrl=${router.currentRoute.value.fullPath}`)
    }
    return Promise.reject(err)
  }
)

// res响应数据类型
type Data<T> = {
  code: string
  message: string
  data: T
}
const request = <T>(
  url: string,
  method: Method = 'get', // 默认是get
  submitData?: object // 可以不传
) => {
  // 泛型的第二个参数，可以自定义响应数据类型
  return instance.request<T, Data<T>>({
    url,
    method,
    // 区分get和其他请求post
    // get 提交数据，选项：params
    // 其他请求post 提交数据，选项：data // toLowerCase 将字符串转换为小写字母
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
// baseURL 基准地址
// instance 是配置好的axios
// request 用来调用接口
export { baseURL, instance, request }

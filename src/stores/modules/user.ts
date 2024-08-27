// 加type证明是类型
import { defineStore } from 'pinia'
import { ref } from 'vue'
// 定义用户信息仓库
export const useUserStore = defineStore(
  'hb-user',
  () => {
    // 用户信息
    const user = ref<any>()
    // 修改用户信息
    const setUser = (u: any) => {
      user.value = u
    }
    // 删除用户信息
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  {
    // 使用数据持久化插件进行本地存储 默认存储到localStorage
    // persist: true
    persist: {
      storage: sessionStorage //更改为sessionStorage
    }
  }
)

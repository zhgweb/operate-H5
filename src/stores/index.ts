// 目录下入口文件
// 1.单独维护pinia
// 引入Pinia
import { createPinia } from 'pinia'
// 引入数据持久化插件
import persist from 'pinia-plugin-persistedstate'
// 创建pinia实例
const pinia = createPinia()
// 使用pinia数据持久化插件
pinia.use(persist)
// 导出pinia实例，给main.ts使用
export default pinia
// 2.创建好的pinia仓库统一从这里导出

export * from './modules/user'

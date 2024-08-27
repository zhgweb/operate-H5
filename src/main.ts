import './styles/main.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 引入 pinia
import pinia from './stores'
// 样式全局使用
import './styles/main.scss'

const app = createApp(App)

// vue使用pinia插件,use(pinia的插件)
app.use(pinia)
app.use(router)
app.mount('#app')

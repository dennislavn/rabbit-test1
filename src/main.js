// 引入初始化的样式文件
import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入懒加载插件并注册
import { lazyPlugin } from './directives'
//引入全局组件插件
import { componentPluguin } from './components'
const app = createApp(App)
const pinia = createPinia()
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPluguin)
app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupPlugins } from './plugins'

const app = createApp(App)
setupPlugins(app)
// 注册路由
setupRouter(app)

app.mount('#app')

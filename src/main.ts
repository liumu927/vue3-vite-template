import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'  // 自动引入./store下的index.ts中声明的 pinia 实例
import VueKonva from 'vue-konva';
import '@/assets/css/global-reset.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueKonva)
app.mount('#app')
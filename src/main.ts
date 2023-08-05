import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import registerAntdv from '@/common/plugins/antdv'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(registerAntdv)

app.mount('#app')

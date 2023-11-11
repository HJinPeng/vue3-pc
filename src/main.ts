import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import registerAntdv from './common/plugins/antdv'
import registerPinia from './common/plugins/pinia'

const app = createApp(App)

app.use(registerPinia)
app.use(router)
app.use(registerAntdv)

app.mount('#app')

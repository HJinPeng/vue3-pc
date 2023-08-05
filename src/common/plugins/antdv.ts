import { Button, Input, Select, DatePicker } from 'ant-design-vue'
import type { Plugin } from 'vue'

const components = [Button, Input, Select, DatePicker]

const registerAntdv: Plugin = {
  install(app) {
    components.forEach((comp) => {
      app.use(comp)
    })
  }
}
export default registerAntdv

import type { Plugin } from 'vue'
import { AppPage } from '@/components/app-page'
import {
  AppLayout,
  LayoutSimple,
  LayoutHeader,
  LayoutHeaderSidebar,
  LayoutSidebarHeader
} from '@/components/app-layout'
import { BaseIcon } from '@/components/base-icon'

const registerComponents: Plugin = {
  install: (app) => {
    app.component('AppPage', AppPage)
    app.component('AppLayout', AppLayout)
    app.component('LayoutSimple', LayoutSimple)
    app.component('LayoutHeader', LayoutHeader)
    app.component('LayoutHeaderSidebar', LayoutHeaderSidebar)
    app.component('LayoutSidebarHeader', LayoutSidebarHeader)
    app.component('BaseIcon', BaseIcon)
  }
}

export default registerComponents

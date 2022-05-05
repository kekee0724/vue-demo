import 'ant-design-vue/dist/antd.css'
// import '@/assets/css/index.scss'
import '@/assets/css/common.less'

import { createApp } from 'vue'

import Antd from 'ant-design-vue'

import { store } from '@levi-m/core'

import App from './App'

import router from './router'

createApp(App).use(store).use(router).use(Antd).mount('#app')

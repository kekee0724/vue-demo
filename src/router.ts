import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { About, Demo } from '@levi-a/views'
import { FileUpload } from '@levi-a/mobile'
import FileUploads from '@levi-a/mobile/FileUpload.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: FileUpload
  },
  {
    path: '/uploads',
    name: 'FileUploads',
    component: FileUploads
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  //   children: [
  //     {
  //       path: 'test',
  //       name: 'test',
  //       component: Test
  //     }
  //   ]
  }
]

const router = createRouter({
  history: createWebHistory('/start-vue/'),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@levi-a/views/Home.vue'
import { About, Demo, Test } from '@levi-a/views'
import { Suning, FileUpload } from '@levi-a/mobile'
import Study from '@levi-a/views/Study.vue'
import FileUploads from '@levi-a/mobile/FileUpload.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upload',
    name: 'FileUpload',
    component: FileUpload
  },
  {
    path: '/uploads',
    name: 'FileUploads',
    component: FileUploads
  },
  {
    path: '/suning',
    name: 'Suning',
    component: () => import(/* webpackChunkName: "suning" */ '@levi-a/mobile/suning.vue'),
    children: [
      {
        path: 'app',
        name: 'app',
        component: Suning
      }
    ]
  },
  {
    path: '/bilibili',
    name: 'Bilibili',
    component: () => import(/* webpackChunkName: "bilibili" */ '@levi-a/mobile/bilibili.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '@levi-a/views/About')
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
    children: [
      {
        path: 'study',
        name: 'study',
        component: Study
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('@levi-a/views/Shop.vue')
      },
      {
        path: 'form',
        name: 'form',
        component: () => import('@levi-a/views/Form.vue')
      },
      {
        path: 'test',
        name: 'test',
        component: Test
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/start-vue/'),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

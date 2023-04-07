import {createApp} from 'vue'
import {createWebHistory, createRouter} from "vue-router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import BaseLayout from './layout/BaseLayout.vue'

import Home from './views/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .component('base-layout', BaseLayout)
  .use(ElementPlus)
  .use(router)
  .mount('#app')

import VueRouter from 'vue-router'
import Vue from 'vue'
import DocTable from '@/components/table/doc-table'
import DocInput from '@/components/input/doc-input'
import DocSingleSelect from '@/components/single-select/doc-single-select'
import DocMultiSelect from '@/components/multi-select/doc-multi-select'
import DocSidebar from '@/components/sidebar/doc-sidebar'
import DocTab from '@/components/tab/doc-tab'
import About from '@/components/about'


const routes = [
  {
    path: '/',
    redirect: '/doc/table'
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/doc/table',
    name: 'table',
    component: DocTable,
  },
  {
    path: '/doc/input',
    name: 'input',
    component: DocInput
  },
  {
    path: '/doc/single-select',
    name: 'single-select',
    component: DocSingleSelect,
  },
  {
    path: '/doc/multi-select',
    name: 'multi-select',
    component: DocMultiSelect,
  },
  {
    path: '/doc/sidebar',
    name: 'sidebar',
    component: DocSidebar,
  },
  {
    path: '/doc/tabs',
    name: 'tabs',
    component: DocTab,
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: 'components',
  routes: routes
})

export default router
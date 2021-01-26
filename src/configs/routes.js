import { lazy } from 'react'

export default {
  Home:{
    path:'/home',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  }
}

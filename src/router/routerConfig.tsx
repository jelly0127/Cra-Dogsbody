import React from 'react'
import { RouteObject } from 'react-router-dom'

//懒加载
const Main = React.lazy(() => import('../pages/Main/Main'))
const Home = React.lazy(() => import('../pages/Home/Home'))
const History = React.lazy(() => import('../pages/History/History'))
// const Ido = React.lazy(() => import('../pages/Ido/Ido'))
const Test = React.lazy(() => import('../pages/Test/Test'))
//懒加载格式定义
const lazyFactory = (LazyComponent: React.LazyExoticComponent<React.FC<any>>) => {
  return (
    <React.Suspense fallback={null}>
      <LazyComponent />
    </React.Suspense>
  )
}
//使用定义的懒加载

//路由路径的基本配置
export const routes: RouteObject[] = [
  { path: '/', element: lazyFactory(Home) },
  // { path: '/ido', element: lazyFactory(Ido) }
  { path: '/test', element: lazyFactory(Test) },
  { path: '/main', element: lazyFactory(Main) },
  { path: '/History', element: lazyFactory(History) },
]
//导出
export default routes

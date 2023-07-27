import { lazy } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

const MainPage = lazy(() => import('pages/MainPage'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
]

export const RenderRoute = () => <RouterProvider router={createBrowserRouter(routes)} />

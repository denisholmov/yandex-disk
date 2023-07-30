import { lazy } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

import { BASE_PATH } from 'env'

const MainPage = lazy(() => import('pages/MainPage'))

const routes: RouteObject[] = [
  {
    path: BASE_PATH,
    element: <MainPage />,
  },
]

export const RenderRoute = () => <RouterProvider router={createBrowserRouter(routes)} />

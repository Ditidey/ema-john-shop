import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import loadProducts from './loaderProduct/loaderProducts'
import CheckOut from './components/CheckOut/CheckOut'

const router =createBrowserRouter([
     {
      path: '/',
      element: <App></App>,
      children:[
        {
          path: '/',
          element: <Shop></Shop>,
        },
        {
          path: 'orders',
          element: <Orders></Orders>,
          loader:  loadProducts
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'checkout',
          element: <CheckOut></CheckOut>
        }
      ]
     }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

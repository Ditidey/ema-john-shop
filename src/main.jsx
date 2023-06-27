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
import Signup from './components/SignUp/Signup'
import AuthProvider from './providers/AuthProvider'
import ProtectRoute from './routes/ProtectRoute'
import Home from './components/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: ()=>fetch('https://ema-john-server-one.vercel.app/totalProducts')
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: loadProducts
      },
      {
        path: '/inventory',
        element:  <ProtectRoute><Inventory></Inventory></ProtectRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout',
        element: <ProtectRoute><CheckOut></CheckOut></ProtectRoute>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>

)

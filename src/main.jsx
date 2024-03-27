import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-base-200'>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>,
)

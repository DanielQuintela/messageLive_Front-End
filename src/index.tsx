import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css' 
import AppRoutes from './routes'
import HeaderApp from './pages/components/header'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <HeaderApp />      
      <AppRoutes />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css' 
import AppRoutes from './routes'
import HeaderContainer from './components/header'
import { UserProvider } from './hooks/UserContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
        <HeaderContainer/>
        <AppRoutes />
    </UserProvider>
     
  </React.StrictMode>,
)

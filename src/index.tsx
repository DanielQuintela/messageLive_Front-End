import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css' 
import AppRoutes from './routes'
import HeaderContainer from './components/header'
import { UserProvider } from './hooks/UserContext'
import {  BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
          <HeaderContainer/>
          <AppRoutes />
      </UserProvider>
    </Router>
  </React.StrictMode>,
)

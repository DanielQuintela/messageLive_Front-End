import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css' // Importa os estilos do Tailwind
import App from './pages/home'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

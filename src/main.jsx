import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// BrowserRouter: React Router を使うための「いちばん外側の箱」
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App 全体を BrowserRouter で包むと、中で URL によるページの切り替えが使える */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

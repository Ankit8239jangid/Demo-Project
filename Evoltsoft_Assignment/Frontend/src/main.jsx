import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import { Toaster } from 'react-hot-toast'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
        <App />
        <Toaster/>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

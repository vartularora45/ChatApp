import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContextProvider} from './context/AuthContextProvider.jsx'
createRoot(document.getElementById('root')).render(
  
  <AuthContext.Provider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthContext.Provider>

)

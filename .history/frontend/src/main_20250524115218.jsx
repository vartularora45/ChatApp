import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContextProvider} from './context/AuthContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
import { socketProvider } from './context/socketContext.jsx'
    
  
  
    <AuthContextProvider>
      <StrictMode>
       <SocketProvider>
        <App />
         </SocketProvider>
      </StrictMode>
    </AuthContextProvider>
 
    
  

)

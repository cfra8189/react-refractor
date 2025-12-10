import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowerRouter} from 'react-router-dom'

const router = createBrowerRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/shop", element: <Shop /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  </StrictMode>,
)

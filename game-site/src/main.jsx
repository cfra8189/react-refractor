import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Shop from './Shop.jsx'
import { createBrowerRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/shop", element: <Shop /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

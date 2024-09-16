import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/index.css'
import AppRouter from './router/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>,
)

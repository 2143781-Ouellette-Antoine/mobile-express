import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { IsAuthLoadedContextProvider } from './contexts/ContextIsAuthLoaded.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IsAuthLoadedContextProvider>
        <App />
    </IsAuthLoadedContextProvider>
  </StrictMode>,
)

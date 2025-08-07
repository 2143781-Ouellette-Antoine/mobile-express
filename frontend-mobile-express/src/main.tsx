import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IsAuthLoadedContextProvider } from './contexts/ContextIsAuthLoaded.tsx'
import { TemporarySnackbarContextProvider } from './contexts/ContextTemporarySnackbar.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IsAuthLoadedContextProvider>
        <TemporarySnackbarContextProvider>
            <App />
        </TemporarySnackbarContextProvider>
    </IsAuthLoadedContextProvider>
  </StrictMode>,
)

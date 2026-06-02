import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Raffle from './Raffle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Raffle />
  </StrictMode>,
)

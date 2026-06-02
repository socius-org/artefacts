import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Raffle from './RaffleApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Raffle />
  </StrictMode>,
)

import './App.css'
import { config } from './config'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Appbar } from './Appbar'

const queryClient = new QueryClient()

function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Appbar />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App

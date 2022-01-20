import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  )

}

export default MyApp

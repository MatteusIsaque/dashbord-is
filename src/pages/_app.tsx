import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import Nav from '../components/global/nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Nav />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp

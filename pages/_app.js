import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return (
    <div>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}

export default MyApp

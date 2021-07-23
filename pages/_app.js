import '@fortawesome/fontawesome-free/css/all.css'
import '../styles/globals.scss'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('@popperjs/core/dist/umd/popper.min.js')
    require('bootstrap/dist/js/bootstrap.min.js')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
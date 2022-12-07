import Navbar from '../components/navbar'
import TopNavbar from '../components/topNavbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

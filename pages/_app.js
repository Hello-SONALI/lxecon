import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>)
}

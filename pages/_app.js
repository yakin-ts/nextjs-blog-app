import '../global.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { BlogProvider } from '../contexts/BlogContext';

export default function MyApp({ Component, pageProps }) {
  return (
   <BlogProvider>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
   </BlogProvider>
  )
}

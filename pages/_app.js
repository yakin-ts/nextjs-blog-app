import '../global.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Provider} from 'react-redux';
import store from '../store';
export default function MyApp({ Component, pageProps }) {
  return (
   <Provider store={store}>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
   </Provider>
  )
}

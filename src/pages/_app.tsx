import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import NavBar from './Navbar';

export default function App({ Component, pageProps }: AppProps) {
 
  return <>
  <NavBar/>
   <Component {...pageProps} />
  </> 
};

import { SessionProvider } from 'next-auth/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import '../styles/layout.css';

function MyApp({ Component, pageProps,session }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component{...pageProps} />);
  }
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />;
        <Footer></Footer>
      </SessionProvider>
    </>);
}

export default MyApp;

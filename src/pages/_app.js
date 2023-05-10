import {useEffect} from "react";
import { Analytics } from "@vercel/analytics/react";

import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../scss/globals.scss';

function MyApp({Component, pageProps})  {
  useEffect(() => {
    import('mdb-ui-kit');
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Analytics/>
    </>
  );
}

export default MyApp;

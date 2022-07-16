import "../styles/globals.css";
import Head from "next/head";
import "../styles/_user.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  var _learnq = _learnq || [];
  return (
    <>
      <Head>
        {" "}
        <title>Doan's Demo</title>
        <script
          type="application/javascript"
          src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY}`}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

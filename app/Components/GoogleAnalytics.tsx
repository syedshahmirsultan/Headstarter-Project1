import Head from 'next/head';

const GoogleAnalytics = () => (
  <Head>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=G-6QLZ72271G`}></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6QLZ72271G');
      `}
    </script>
  </Head>
);

export default GoogleAnalytics;

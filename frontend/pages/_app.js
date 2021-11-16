import '../styles/globals.css'
import Head from "next/head";
import { UserContextProvider } from '../components/context/state';
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
            {/* Responsive meta tag */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* bootstrap CDN */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>

            </Head>
            <Script
                id="bootstrap-script"
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous">
            </Script>

            <Component {...pageProps} />
            
            {/* code for using contextProvider in this project we didn't use context provider */}
            {/* <UserContextProvider>
                <Component {...pageProps} />
            </UserContextProvider> */}
        </>
    );
}
export default MyApp;



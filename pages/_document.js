import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="/images/Izumo_cloud_icon.png" rel="icon" type="image/png" sizes="16x16"></link>
                <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

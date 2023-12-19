// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Favicon  */}
                <link rel="icon" type="icon" href="/favicon.ico" />
                {/* Fonts  */}
                <link href='https://fonts.googleapis.com/css?family=Noto Sans:wght@400;500;700;800&display=swap' rel='stylesheet'></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

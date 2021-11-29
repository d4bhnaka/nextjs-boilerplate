import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// import { GA_TRACKING_ID } from "~/lib/gtag";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {/* 公開時には noindex を外す！ */}
          <meta name="robots" content="noindex, nofollow, noarchive" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content="#ffffff" />
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          ></link>
          <link
            href={
              "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP&display=swap"
            }
            rel="stylesheet"
          ></link>
          <link
            rel="shortcut icon"
            href="/images/icons/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/images/icons/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/icons/icon-192x192.png"
          />
          <link rel="manifest" href="/manifest.json"></link>
          <script
            async={true}
            src={`https://de8f1sv7sajnb.cloudfront.net/js/modernizr-webp.js`}
          />

          {/* <script
            async={true}
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

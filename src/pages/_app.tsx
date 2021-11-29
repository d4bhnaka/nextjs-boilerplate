import "../styles/globals.scss";
import "lazysizes";

import { Fragment, useEffect, useState, useCallback } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import NextNprogress from "nextjs-progressbar";

// import TagManager from "react-gtm-module";
import * as gtag from "~/lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // gtag
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // GTM
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: "GTM-" });
  // }, []);

  return (
    <Fragment>
      <NextNprogress color={"#3f8dce"} startPosition={0.25} stopDelayMs={300} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

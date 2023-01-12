import React from "react";
import type { AppProps } from "next/app";

import { GlobalStyles } from "../utils";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

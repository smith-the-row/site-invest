import React, { useEffect, useRef } from "react";

const Crypto = () => {
  // ref to attach to the HTML element
  const cryptoRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "dark",
      locale: "en",
      isTransparent: false,
    });

    cryptoRef.current.appendChild(script);
  }, [cryptoRef]);

  return (
    <div class="tradingview-widget-container" ref={cryptoRef}>
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/">
          <span class="blue-text">Cryptocurrency Markets</span>
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
};

export default Crypto;

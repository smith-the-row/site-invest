import React, { useEffect, useRef } from "react";

const ForexWidget = () => {
  // the forex table ref
  const forexRef = useRef();

  // the useEffect for the Javascript input
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: true,
      colorTheme: "dark",
      locale: "en",
    });

    forexRef.current.appendChild(script);
  }, [forexRef]);

  return (
    <div class="tradingview-widget-container" ref={forexRef}>
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/forex-screener/">
          <span class="blue-text">Forex Screener</span>
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
};

export default ForexWidget;

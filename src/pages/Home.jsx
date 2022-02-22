/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import Plan from "../components/Plans/Plan";
import Reason from "../components/Reason/Reason";
import Start from "../components/Start/Start";
import Work from "../components/Work/Work";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }

    // insert tidio here
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/ddgy1qfhhgt7p01guudw28bqkv3vqvpz.js";

    document.body.append(script);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <About />
      <Start />
      <Work />
      <Reason />
      <Plan />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export default Home;

{
  /* <script src="//code.tidio.co/ddgy1qfhhgt7p01guudw28bqkv3vqvpz.js" async></script> */
}

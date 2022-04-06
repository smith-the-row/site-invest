import React from "react";
import Layout from "../components/Layout/Layout";
import BonusAmt from "../components/Bonus/BonusAmt";
import BonusForm from "../components/Bonus/BonusForm";

const Bonus = () => {
  return (
    <Layout>
      <BonusAmt />
      <BonusForm />
    </Layout>
  );
};

export default Bonus;

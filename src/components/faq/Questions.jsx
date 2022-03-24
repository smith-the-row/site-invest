import React from "react";
import {
  Accordion,
  AccordionDetails,
  Typography,
  Box,
  AccordionSummary,
  Container,
} from "@mui/material";
import { FaExpandArrowsAlt } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "    What is Cryptocurrency?",
    text: ` Cryptocurrency is decentralized digital money, based on blockchain
    technology. You may be familiar with the most popular versions,
    Bitcoin and Ethereum, but there are more than 5,000 different
    cryptocurrencies in circulation, according to CoinLore.`,
  },

  {
    id: 2,
    title: "What is crypto currency mining?",
    text: `   In a nutshell, cryptocurrency mining is a term that refers to the
    process of gathering cryptocurrency as a reward for work that you
    complete.`,
  },

  {
    id: 3,
    title: "Why do people crypto mine?",
    text: `   In a nutshell, cryptocurrency mining is a term that refers to the
    process of gathering cryptocurrency as a reward for work that you
    complete.`,
  },

  {
    id: 4,
    title: "What is crypto currency mining?",
    text: `For some, they’re looking for another source of income. For others,
    it’s about gaining greater financial freedom without governments or
    banks butting in. But whatever the reason, cryptocurrencies are a
    growing area of interest for technophiles, investors, and
    cybercriminals alike.`,
  },
  {
    id: 5,
    title: "How can i withdraw my earning balance?",
    text: `Miners can withdraw their mining coins. We processed withdrawals
    manually so it will take more time.
`,
  },
  {
    id: 6,
    title: `How does CoinSignalPro Insurance work and how does it protect miners
    assets and machines?`,
    text: `The insurance has a lite token fee and covers everything including
    fees, it gives you 20% of any fee or deposit. The insurance earns
    you tokens that are paid and the application is flexible to enable
    every miner have full access to this funds and take care of his/her
    Coinsignal maintenance.
  `,
  },
];

const Questions = () => {
  return (
    <>
      <div className="container d-flex flex-column">
        <div className="my-3 text-center">
          <h1 className="fw-bolder">Ask your Questions</h1>
          <p className="text-white p-1">
            Here you can find our top frequently asked questions. Please let us
            know if you have any queries regarding our mining platform and FAQs.
          </p>
        </div>
      </div>
      <Box sx={{ mt: 2, mb: 4 }}>
        <Container>
          {items.map((item) => (
            <Accordion>
              <AccordionSummary expandIcon={<FaExpandArrowsAlt />}>
                <Typography variant="body1">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{item.text}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Questions;

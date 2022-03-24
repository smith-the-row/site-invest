import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#1e222d",
      default: "#131722",
    },
  },
  typography: {
    h1: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },

    h2: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },

    h3: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },

    h4: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    h5: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    h6: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    body1: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    },
    body2: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    },
    subtitle1: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    },
    subtitle2: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontSize: "14px",
          fontFamily: ["Josefin Sans", "sans-serif"].join(","),
        },
      },
    },
  },
});

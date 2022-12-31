import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default createTheme({
  palette: {
    background: {
      default: "#F1F3F4",
    },
    primary: {
      main: "#14194C",
    },
  },

  MultiTypography: {
    fontFamily: ["Mulish", "san-serif"],
    h4: {
      fontWeight: 800,
    },
  },
});

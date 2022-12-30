import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/index";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
    </React.Fragment>
    
  );
};

export default App;

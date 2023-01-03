import React from "react";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/index";
import Bookmarks from "./components/Bookmarks/index";
import Definition from "./components/Definition/index";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} sx={{ p: 2 }}>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/bookmarks" element={<Bookmarks />}></Route>
                <Route
                  exact
                  path="/search/:word"
                  element={<Definition />}
                ></Route>
              </Routes>
            </Router>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;

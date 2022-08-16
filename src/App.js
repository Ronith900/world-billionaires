import React, { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import BTable from "./components/table";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <SideBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Typography paragraph>
            <BTable />
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default App;

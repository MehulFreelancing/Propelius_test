import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Application from "./Application";

function App() {
  return (
    // <ThemeProvider>
    <Router>
      <Application />
    </Router>
    // </ThemeProvider>
  );
}

export default App;

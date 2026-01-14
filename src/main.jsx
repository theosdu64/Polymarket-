import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import "./index.css";
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { ColorModeProvider } from "./context/ColorModeContext";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ColorModeProvider>
  </React.StrictMode>
);

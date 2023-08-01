import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import ColorModeSwticher from "./ColorModeSwticher";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwticher />
      <App />
    </ChakraProvider>
  </StrictMode>
);

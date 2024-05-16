import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import MyProvider from "./Components/ContextApi/MyProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </MyProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const colors = {
  brand: {
    900: "#000000", // Black
    800: "#1a1a1a", // Dark Gray
    700: "#333333", // Gray
    600: "#4d4d4d", // Light Gray
    500: "#ffffff", // White
    400: "#ff0000", // Red
    300: "#ff4d4d", // Light Red
    200: "#ff9999", // Lighter Red
    100: "#ffe6e6", // Lightest Red
  },
};

const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Roboto', sans-serif",
};

const theme = extendTheme({ colors, fonts });

const GlobalStyles = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.brand[900]};
    color: ${colors.brand[500]};
  }
  a {
    text-decoration: none;
    color: ${colors.brand[400]};
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
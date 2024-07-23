import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App"; // Import the main App component

// Get the root container from the HTML document
const container = document.getElementById("root");
// Create a root for React to render into
const root = createRoot(container);

// Render the App component inside React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

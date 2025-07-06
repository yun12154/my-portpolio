import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating
      size={24}
      className="test"
      color="red"
      messages={["Terrible", "Bad", "Okay", "Good", "Awesome"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);

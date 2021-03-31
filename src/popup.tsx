import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const styles = {
  main: {
    fontSize: "16px",
    padding: "30px",
    width: 300,
    fontFamily: "'Lato', sans-serif",
    background: "#444",
    color: "white",
  },
  title: {
    opacity: 0.2,
    fontSize: 28,
    marginBottom: 18,
    fontFamily: "'Train One', cursive",
  },
  text: {
    marginTop: 8,
  },
};

const Popup = () => {
  return (
    <div style={styles.main}>
      <div style={styles.title}>ephemeral image</div>
      <div style={styles.text}>
        To share a temporary image URL, right click on an image and click "Copy
        ephemeral URL".
      </div>
      <div style={styles.text}>
        Your image will disappear after a few hours.
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);

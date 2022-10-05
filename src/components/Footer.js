import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/oleksandra-mishchenko-33497b245/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Oleksandra Mishchenko
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/Morikachan/react-dictionary"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>
      .
    </footer>
  );
}

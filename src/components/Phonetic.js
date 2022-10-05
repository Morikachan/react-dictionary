import React from "react";
import "./Phonetic.css";

export default function Phonetics({ phonetic }) {
  if (phonetic) {
    return (
      <div className="Phonetic">
        <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">
          Listen
        </a>
        <h2 className="phonetic-text">{phonetic.text}</h2>
      </div>
    );
  } else {
    return null;
  }
}

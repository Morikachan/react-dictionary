import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos";
import "./Results.css";

export default function Results({ definition, photos }) {
  if (definition) {
    return (
      <div className="Results">
        <section>
          <h1>{definition.word}</h1>
          {definition.phonetics.map((phonetic, index) => {
            return <Phonetic phonetic={phonetic} key={index} />;
          })}
        </section>
        {definition.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
        <Photos photos={photos} />
      </div>
    );
  } else {
    return null;
  }
}

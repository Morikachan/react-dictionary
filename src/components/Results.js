import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results({ results }) {
  console.log(results);
  if (results) {
    return (
      <div className="Results">
        <section>
          <h1>{results.word}</h1>
          {results.phonetics.map((phonetic, index) => {
            return (
              <div>
                <Phonetic phonetic={phonetic} key={index} />
              </div>
            );
          })}
        </section>
        {results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

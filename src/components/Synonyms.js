import React from "react";
import "./Synonyms.css";

export default function Synonyms({ synonyms }) {
  if (synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        <ul className="mt-3 d-flex flex-wrap">
          {synonyms.map((synonym, index) => {
            return (
              <li className="mb-2 me-2" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

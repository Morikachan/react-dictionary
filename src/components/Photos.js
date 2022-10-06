import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <section className="Photos">
        <div className="row">
          {photos.map((photo) => {
            return (
              <div
                className="col-lg-4 col-sm-6 d-flex align-self-center"
                key={photo.id}
              >
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

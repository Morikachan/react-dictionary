import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Footer from "./Footer";
import Form from "react-bootstrap/Form";
import { createClient } from 'pexels';

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDefinition(null);
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error]);

  function search(event) {
    event.preventDefault();
    apiDictionaryHandle();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function apiDictionaryHandle() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((err) => setError(err));
  }

  function handleResponse(response) {
    setDefinition(response.data[0]);
    const client  = createClient("563492ad6f91700001000001271447b8eb5f4f2e803c59313256eb8a");
    const query = response.data[0].word;
    client.photos.search({ query, per_page: 12 }).then(handleImages);
  }

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  return (
    <div className="Dictionary">
      <div className="container mt-3">
        <section>
          <label>What word do you want to look up?</label>
          <Form onSubmit={search}>
            <Form.Control
              type="search"
              autoFocus={true}
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
          </Form>
        </section>
        <Results definition={definition} photos={photos} />
        {error ? (
          <section className="error">
            <strong>
              Sorry, can't find the meaning of this word. Try again.
            </strong>
          </section>
        ) : null}
        <Footer />
      </div>
    </div>
  );
}

export default Dictionary;

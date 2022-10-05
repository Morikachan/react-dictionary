import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Footer from "./Footer";
import Form from "react-bootstrap/Form";

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();
    apiDictionaryHandle();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function apiDictionaryHandle() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setDefinition(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let apiKey = "563492ad6f91700001000001271447b8eb5f4f2e803c59313256eb8a";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
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
        <Footer />
      </div>
    </div>
  );
}

export default Dictionary;

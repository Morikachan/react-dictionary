import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Form from "react-bootstrap/Form";

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function apiHundle() {
    const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function search(event) {
    event.preventDefault();
    apiHundle();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
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
        <Results results={results} />
      </div>
    </div>
  );
}

export default Dictionary;

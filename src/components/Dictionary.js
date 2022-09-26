import React, { useState } from "react";
import "./Dictionary.css";
import Form from "react-bootstrap/Form";

function Dictionary() {
  const [keyword, setKeyword] = useState("sunset");

  function search(event) {
    event.preventDefault();
    console.log(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="container mt-3">
        <Form onSubmit={search}>
          <Form.Control
            type="search"
            autoFocus={true}
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
        </Form>
      </div>
    </div>
  );
}

export default Dictionary;

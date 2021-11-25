import { useState } from "react";

const Search = ({searchQuery}) => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      className="input-group mb-5 mt-4"
      style={{ width: "300px", margin: "auto" }}
    >
      <input
        onChange={handleInputChange}
        value={text}
        type="text"
        className="form-control"
        placeholder="Enter Username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <span style={{cursor: "pointer"}} onClick={() => searchQuery(text, setText)} className="input-group-text" id="basic-addon2">
        Search
      </span>
    </div>
  );
};

export default Search;

import { useState } from "react";

const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term</label>
        <input type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default Searchbar;

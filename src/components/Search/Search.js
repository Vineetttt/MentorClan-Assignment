import React from 'react';
import "./Search.css";

const SearchBox = ({ input, SetInputData }) => {
    return (
      <div className="inputBox">
        <input
          type="text"
          value={input}
          placeholder="&#128269; Search by name"
          onChange={SetInputData}
        />
      </div>
    );
};
  
export default SearchBox;
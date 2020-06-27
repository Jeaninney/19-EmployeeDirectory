import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBox(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Search for a user by name"
          id="employee"
        />
      </div>
    </form>
  );
}

export default SearchBox;

import React from "react";

function SearchBar({search, setSearch}) {

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(search);
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}
export default SearchBar;
import React from 'react';

function SearchCatForm() {
  return (
      <form className="form">
<input placeholder="Search" type = "text"
name = "searchString" required />
<button type ="submit">Cat search </button>

      </form>
  );
}

export default SearchCatForm;

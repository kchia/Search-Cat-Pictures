import React from 'react';

function SearchCatForm(props) {
  const { handleSubmit, handleChange, searchString } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Search"
        type="text"
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
      />
      <button type="submit">Cat search </button>
    </form>
  );
}

export default SearchCatForm;

import React from 'react';

function SearchHeader({ lastSearch }) {
  return (
    <header>
      <div className="brand">
        <div className="img-wrap">
          <img src="https://cdn2.thecatapi.com/images/MTUwNTk4NQ.gif" alt="" />
        </div>
        <h1>Cat Searcher</h1>
        <p>
          {' '}
          Enter the first four characters of the cat breed to begin the search.
          Example enter ben for bengal
          {/* <span> Example enter ben for bengal</span> */}
        </p>
      </div>
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </header>
  );
}
export default SearchHeader;

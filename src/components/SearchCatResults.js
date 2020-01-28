import React from 'react';

function SearchCatResults(props) {
  const { images } = props;
  if (!images.length) {
    return <h2>No Images Found!</h2>;
  }
  return (
    <div className="gallery">
      {images.map(image => (
        <div id={image.id} key={image.id} className="gif">
          <img src={image.url} />
        </div>
      ))}
    </div>
  );
}

export default SearchCatResults;

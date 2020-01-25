import React from 'react';


    function SearchCatResults(props) {
  const { images } = props;
    if (!images.length) {
return <h2>No Images Found!</h2>;
  }
return (
    <div className="gallery">
        {images.map(image => (
        <div key={image.id} className="gif">
     <img src={image.images.downsized_large.url} />
        </div>
        ))}
    </div>
  );

}


export default SearchCatResults;

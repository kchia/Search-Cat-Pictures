import React, { useState, useEffect } from 'react';


import SearchCatForm from './components/SearchCatForm';
import SearchCatResults from './components/SearchCatResults';

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_HEADER,
    limit: 25,
    rating: 'G',
    api: 'https://thecatapi.com/v1/images',
    endpoint: '/search'
  };

  const [images, setImages] = useState([]);
  // const [searchString, setSearchString]=useState('cats');
  // const [lastSearch, setlastSearch]=useState('');

  useEffect(() => {
    getImages();
  }, []);

  function getImages() {
    const searchString = 'breed';
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
      })
      .catch(console.error);
  }
  // function App (){
  return (
    <div>
      <h1>Cat Searcher</h1>
      <SearchCatForm />
      {/* <SearchCatResults /> */}
      <SearchCatResults images={images} />
    </div>
  );
}

export default App;

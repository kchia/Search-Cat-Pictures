import React, { useState, useEffect } from 'react';
import SearchCatForm from './components/SearchCatForm';
import SearchCatResults from './components/SearchCatResults';
import SearchHeader from './components/SearchHeader';

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_CAT_API,
    limit: 10,
    api: 'https://api.thecatapi.com/v1/images',
    endpoint: '/search'
  };

  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('beng');
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    getImages(searchString);
  }, []);

  function getImages(searchString) {
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}?breed_ids=${searchString}&limit=${searchOptions.limit}`;

    fetch(url, {
      method: 'get',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': true
      }
    })
      .then(response => response.json())
      .then(response => {
        setImages(response);
        setLastSearch(searchString);
        setSearchString('')
        console.log('databk', response);
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }


  return (
    <div>
      <SearchHeader lastSearch={lastSearch} />
      <SearchCatForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      {/* <SearchCatResults /> */}
      <SearchCatResults images={images} />
    </div>
  );
}

export default App;

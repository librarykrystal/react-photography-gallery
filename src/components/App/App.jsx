import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

    const [galleryArray, setGalleryArray] = useState([]);

    // console.log('galleryArray TEST:', galleryArray);

    // calling GET function on page load
    useEffect( () => {
      fetchGallery();
    }, [])

    // retrieving gallery contents from gallery.data.js module:
    const fetchGallery = () => {
      axios.get('/gallery')
      .then((response) => {
        // console.log('GET Response data:', response.data);
        // assigning the data recieved to the galleryArray:
        setGalleryArray(response.data);
      }).catch(function(error) {
        console.log('GET Error', error);
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Paris Snaps</h1>
        </header>
        <GalleryList galleryArrayProp={galleryArray} fetchGallery={fetchGallery}/>
        {/* sending the fetch function down to GalleryItem so it can be called after adding a like */}
      </div>
    );
}

export default App;

import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
    const [galleryArray, setGalleryArray] = useState([]);

    console.log('galleryArray TEST:', galleryArray);

    // calling GET function on page load
    useEffect( () => {
      fetchGallery();
    }, [])

    // retrieving gallery contents
    // router is pre-written to grab this data from gallery.data.js module
    const fetchGallery = () => {
      axios.get('/gallery')
      .then((response) => {
        console.log('GET Response data:', response.data);
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
        <img src="images/pomponOwl.jpg"/>
        <GalleryList galleryArrayProp={galleryArray}/>
      </div>
    );
}

export default App;

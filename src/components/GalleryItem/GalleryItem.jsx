import React, {useState} from 'react';
import axios from 'axios';

function GalleryItem({photo, fetchGallery}){

    const [showDescription, setShowDescription] = useState(false);

    // toggle if description or photo is shown:
    const toggleDescription = () => {
        // console.log('toggleDescription TEST')
        // set it to whichever it is currently not:
        setShowDescription(!showDescription);
    }


    // using the PUT route which adds one like to the photo's count:
    const addLike = () => {
        axios.put(`/gallery/like/${photo.id}`)
        .then((response) => {
        //   console.log('PUT response:', response.data);
        //   console.log('PUT PhotoID:', photo.id);
          fetchGallery();
        })
        .catch(function(error) {
          console.log('PUT ERROR:', error);
        })
      }


    return(
        <>
        {/* <p>{JSON.stringify(props)}</p>    PROP TEST */}
        <div className="itemContainer" >
            <div className="content" onClick={toggleDescription}>
                {/* If showDesc is FALSE, show the image: */}
                { !showDescription && <img key={photo.id} src={photo.path} ></img> }
                {/* If showDesc is TRUE, show the description text: */}
                { showDescription && <p>{photo.description}</p> }
            </div>
            <div className="likes">
                <button className="likeBtn" onClick={addLike}>LIKE</button>
                <div className="likesCount">
                    <p>♥︎ {photo.likes}</p>
                </div>
            </div>
        </div>
        </>

    )
}

export default GalleryItem;
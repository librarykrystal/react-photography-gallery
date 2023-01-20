import React, {useState} from 'react';

function GalleryItem({photo}){

    const [showDescription, setShowDescription] = useState(false);

    // toggle if description or photo is shown
    const toggleDescription = () => {
        console.log('toggleDescription TEST')
        // set it to whichever it is currently not:
        setShowDescription(!showDescription);
    }

    return(
        <>
        {/* <p>{JSON.stringify(props)}</p>    PROP TEST */}
        <div className="itemContainer" >
            <div className="content" onClick={toggleDescription}>
                { !showDescription && <img key={photo.id} src={photo.path} ></img> }
                { showDescription && <p>{photo.description}</p> }
            </div>
            <div className="likes">
                <button className="likeBtn">LIKE</button>
                <br />
                <p className="likesP">♥︎ 0</p>
            </div>
        </div>
        </>

    )
}

export default GalleryItem;
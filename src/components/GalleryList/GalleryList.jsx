import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryArrayProp, fetchGallery}){
    return(
        <>
        {/* <p>{JSON.stringify(galleryArrayProp)}</p>    // TEST for prop success */}
        {/* Looping through gallery array and sending data for each item to GalleryItem: */}
        {galleryArrayProp.map(photo => (
            // <p>{photo.id}</p>     // DOM TEST before consuming GalleryItem
            <GalleryItem key={photo.id} photo={photo} fetchGallery={fetchGallery}/>
        ))}
        </>
    )
}

export default GalleryList;
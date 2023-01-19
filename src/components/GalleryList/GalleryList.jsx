import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryArrayProp}){
    return(
        <>
        {/* <p>{JSON.stringify(galleryArrayProp)}</p>     TEST for prop success */}

        {galleryArrayProp.map(photo => (
            // <p>{photo.id}</p>     // TEST before consuming GalleryItem
            <GalleryItem key={photo.id} photo={photo.path} caption={photo.description} likes={photo.likes}/>
        ))}

        </>
    )
}

export default GalleryList;
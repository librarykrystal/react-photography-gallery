function GalleryItem(props){
    return(
        <>
        {/* <p>{JSON.stringify(props)}</p>    TEST */}
        <img key={props.id} src={props.photo}></img>

        </>
    )
}

export default GalleryItem;
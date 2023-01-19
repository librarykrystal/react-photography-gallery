function GalleryItem(props){
    return(
        <div className="photo">
        {/* <p>{JSON.stringify(props)}</p>    TEST */}
        <img key={props.id} src={props.photo}></img>
        <button className="likeBtn">LIKE</button>
        <p className="likesP">♥︎ 0</p>
        </div>
    )
}

export default GalleryItem;
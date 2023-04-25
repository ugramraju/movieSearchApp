import React, { useEffect, useState } from "react";
import "./Images.css";
import axios from "axios";
const apikey = "c63640b858fb88dcedd67a089058711b";
const Images=()=>{
    const [images,setImages]=useState([]);
    const [input,setInput]=useState("");
    const [searching,setSearching]=useState(false);
    useEffect(()=>{
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${input}&format=json&nojsoncallback=1`;
        axios.get(url)
        .then((res)=>{setImages(res.data.photos.photo)})
        .catch((err)=>{console.log(err)});
    },[input,searching]);
    const handleChange=(e)=>{
        e.preventDefault();
        setInput(e.target.value);
        setSearching(searching)
    };
    const handleSearch=()=>{
        setSearching(searching)
    }
    return(
       <div className="container">
        <div className="heading">
            <h1>React Photo Search</h1>
            <div id="bookmark_btn">Bookmarks</div>
        </div>
        <div className="inputBoxes"> 
            <input type="text" id="image_search" placeholder="search for high resolution images" onChange={handleChange}/>
            <input type="button" id="search-btn" value="search" onClick={handleSearch}/>
        </div>
        <div className="imagesContainer">
        
              {
              images.map((image)=>{
                const imgUrl=`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
                return(
                    <img key={image.id} src={imgUrl} alt="pictures" id="hoverImg"/>
                )
              })
              }
        </div>
       </div>
    )
}
export default Images;




import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Post(props){   

    const [image, setImage] = useState('');
    const navigate  = useNavigate()
    
    return(
        <div id="Post" onClick={(event)=>{event.preventDefault();
            navigate(`/posts/${props.Post.id}`)}}>
            <img src={props.Post.coverUrl} alt="product-image" className="postImage"/>
            <div className="content-note">
            <h3>{props.Post.title}</h3>
            <p>{props.Post.tags}</p>
        </div>
            </div>
    )
}

export default Post;
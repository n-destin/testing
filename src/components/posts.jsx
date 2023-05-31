import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions/actions";
import Post from "./Post";
import { Link, useNavigate } from "react-router-dom";

function Posts (){

    const dispatch = useDispatch();
    const posts = useSelector((store) => {return store.posts});

    useEffect(() =>{
        console.log('here sending');
        const fetching = fetchPosts();
        fetching(dispatch);
    }, []);

    const PostsElements = posts.all.map((element)=>{
        console.log(element);
        const path = `/posts/${element.id}`
        return <Post Post = {element}/>
    })

    
    return(
        <div id="posts">
            {PostsElements}
        </div>
    )
}

export default Posts;
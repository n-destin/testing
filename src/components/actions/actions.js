import { useDispatch } from "react-redux"
import { Response } from "../../middlewares/services";
import axios from "axios";
import { useEffect } from "react";
export const ROOT_URL = 'https://destin-posts-api.onrender.com/api';
const API_KEY = '?key=destin_niyomufasha';

export const ActionTypes = {
    CREATE_POST: 'CREATE_POST',
    FETCH_POSTS: 'FECTCH_POSTS',
    FETCH_POST : 'FETCH_POST',
}

// creating a post
export function createPost (Post, navigate){
    console.log(Post);
    
    axios.post(`${ROOT_URL}/posts${API_KEY}`, {
        'title':Post.title,
        'tags': Post.tags,
        'content': Post.content,
        'coverUrl': Post.coverUrl,
    });
    navigate('/posts');
}

export function fetchPosts(){
    return (dispatch)=>{
        console.log('called');
        axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response =>{
            dispatch(
                {
                    type:ActionTypes.FETCH_POSTS,
                    payload: response.data
                }
            )
        }).catch(error=>{
            console.log(error);
        })
    }
}

export function fetchpost (){
    return (dispatch, articleID, navigate)=>{
        axios.get(`${ROOT_URL}/posts/${articleID}${API_KEY}`).then(response=>{
            const post = response.data;
            console.log(post);
            dispatch(
                {
                    type: ActionTypes.FETCH_POST,
                    payload:post 
                }
            );
        }).catch(Error=>{
            console.log(Error);
        })
    }
}


export function editPost(){
    return (postID, data, navigate)=>{
        axios.put(`${ROOT_URL}/posts/${postID}${API_KEY}`,{
            'title': data.title,
            'tags': data.tags,
            'coverUrl': data.coverUrl
        })
        navigate('/posts')
    }
}

export function deletePost(){
    return(id, navigate)=>{
        axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(
            navigate('/posts')
        )
    }
}
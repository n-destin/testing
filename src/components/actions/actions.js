import { useDispatch } from "react-redux"
import { Response } from "../../middlewares/services";
import axios from "axios";
import { useEffect } from "react";
const ROOT_URL = 'https://api-auth-destin.onrender.com/api';
const API_KEY = '?key=destin_niyomufasha';

export const ActionTypes = {
    CREATE_POST: 'CREATE_POST',
    FETCH_POSTS: 'FECTCH_POSTS',
    FETCH_POST : 'FETCH_POST',
    AUTH_USER: 'AUTH_USER',
    DEAUTH_USER : 'DEAUTH_USER',
    AUTH_ERROR: 'AUTH_ERROR'
}

// creating a post
export function createPost (Post, navigate){
    console.log(Post);
    axios.post(`${ROOT_URL}/posts${API_KEY}`, {
        'title':Post.title,
        'tags': Post.tags,
        'content': Post.content,
        'coverUrl': Post.coverUrl,
    }, {headers:{'authorization': localStorage.getItem('token')}});
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
        }, {headers:{'authorization': localStorage.getItem('token')}})
        navigate('/posts')
    }
}

export function deletePost(){
    return(id, navigate)=>{
        axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, {headers:{'authorization': localStorage.getItem('token')}}).then(
            navigate('/posts')
        )
    }
}

// export function authError(error) {
//     return {
//       type: ActionTypes.AUTH_ERROR,
//       message: error,
//     };
//   }

export function authenticateUser(email, password, navigate){
    return (dispatch)=>{
        axios.post(`${ROOT_URL}/login`, {email, password}).then(result=>{
            if(result){
                console.log('I am here');
                dispatch(
                    {
                        type: ActionTypes.AUTH_USER,
                    }
                )
                localStorage.setItem('token', result.data.userToken)
                navigate('/posts')
            }
        }).catch(error=>{
            console.log(error.message);
            dispatch({
                type: ActionTypes.AUTH_ERROR,
                payload : 'loginError' + {message: error.response.data}
            })
    })
    }
}

export function singupUser({email, password}, navigate){
    return (dispatch)=>{
        axios.post(`${ROOT_URL}/signup`, ({email, password})).then((response)=>{
            console.log('let us go');
            if(response){
                dispatch({
                    type: ActionTypes.AUTH_USER,
                })
                localStorage.setItem('token', response.data.userToken);
                navigate('/posts')
            }
        }).catch(error=>{
            dispatch({
                type: ActionTypes.AUTH_ERROR,
                payload: 'signUpError' + error.response.data
            })
        })
    }
}


export function signoutUser(navigate) {
    return (dispatch) => {
      localStorage.removeItem('token');
      dispatch({ type: ActionTypes.DEAUTH_USER });
      navigate('/');
    };
  }
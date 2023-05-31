import axios from "axios";

const ROOT_URL = 'https://destin-posts-api.onrender.com/api/';
const API_KEY = '?key=destin_niyomufasha';

export const Response = async function fetchPosts(){
    await axios.get(`${ROOT_URL}/posts`).then(response =>{
        console.log('here we go' + response.data + ROOT_URL);
        return response.data;
    }).catch(error=>{
        console.log(error);
    })
}


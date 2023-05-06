import axios from "axios";

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=destin_niyomufasha';

export const Response = async function fetchPosts(){
    await axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response =>{
        console.log(response.data);
        return response.data;
    }).catch(error=>{
        console.log(error);
    })
}


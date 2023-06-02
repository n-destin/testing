import { ROOT_URL } from "./actions/actions";
import axios from "axios";

function getSignedReqeust(file){
    const fileName = encodeURIComponent(file.name);
    // what does this mean??? 
    return axios.get(`${ROOT_URL}/sign-s3?file-name=${fileName}&file-type=${file.type}`);
}

function uploadFileToS3(signedRequest, file, url) {
    return new Promise((fulfill, reject) => {
      axios.put(signedRequest, file, { headers: { 'Content-Type': file.type } }).then((response) => {
        fulfill(url);
      }).catch((error) => {
        reject(error);
      });
    });
  }


  export function uploadImage(file) {
    // returns a promise so you can handle error and completion in your component
    return getSignedReqeust(file).then((response) => {
      return uploadFileToS3(response.data.signedRequest, file, response.data.url);
    });
  }  
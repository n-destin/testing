import React, {useState}from 'react'
import {createPost} from './actions/actions'
import { Link, useNavigate } from 'react-router-dom';
import holder from '../../src/images/holder.jpg'
import { uploadImage } from './s3';


function Newpost(){

    const navigate = useNavigate();


    const [Title, setTitle] = useState("");
    const [Tags, setTags] = useState("");
    const [Content, setContent] = useState("");
    const[coverUrl, setCover]  = useState("");

    const[imagePrev, setImagePrev] = useState({});

    const changeCover = (event)=>{
        setCover(event.target.value);
    }

    const changeTitle = (event) =>{
        setTitle(event.target.value)
    }

    const changeContent = (event)=>{
        setContent(event.target.value);
    }

    const changeTags = (event)=>{
        setTags(event.target.value)
    }

    function onuploadImage (event){
        // event.preventDefault();
        const file = event.target.files[0];
        if(!file) alert('please select a file')
        const reader = new FileReader();
        setImagePrev({preview: window.URL.createObjectURL(file), file})
    }
    

    var toSend = {
        title: Title,
        tags: Tags,
        Content: Content,
        coverUrl: coverUrl
    }

    function toAWS(file){
        if(file){
            uploadImage(file).then(url=>{
                setCover(url);
            })
            createPost(toSend, navigate)
        }
    }
    
    return(
        <form>
            <h2>Create a New Note</h2>
            <div className='form'>
                <label htmlFor="">
                    Title: <br />
                    <input type="text" onChange={changeTitle}/>
                </label>
                <br />
                <label htmlFor="">
                    Tags: <br />
                    <input type="text" onChange={changeTags}/>
                </label>
                <br />
                <label htmlFor="">
                    Content: <br />
                    <textarea type="text" onChange={changeContent}/>
                </label>
                <br />
                <label htmlFor="">
                    coverUrl: <br />
                    <input type="text" onChange={changeCover}/>
                </label>
                <input className='button' type="submit" name="submit" value="SUBMIT" onClick={(event)=>{
                    event.preventDefault();
                    toAWS(imagePrev.file)}}/>

                <img src={(imagePrev) ? imagePrev : holder} alt="Image-preview" style={{
                    height: '10rem'
                }}/>
                <input type="file" name='coverImage' onChange={onuploadImage} />
            </div>
        </form>
    )
}

export default Newpost;
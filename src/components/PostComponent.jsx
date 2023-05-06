import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import reactMarkdown from "react-markdown";
import { fetchpost } from "./actions/actions";
import save  from '/Users/destinniyomufasha/Desktop/CS52/platform-client-n-destin/src/images/save.png'
import edit from '/Users/destinniyomufasha/Desktop/CS52/platform-client-n-destin/src/images/edit.png'
import { editPost } from "./actions/actions";
import DeleteIcon from '../images/delete.png'
import { deletePost } from "./actions/actions";


function Posting(props){


    const[isEdit, setEdit] = useState(false);

    const {id} = useParams()
    
    
    const navigate  = useNavigate();
    const getPost = fetchpost()
    const dispatch = useDispatch();
    useEffect(()=>{
        getPost(dispatch, id, navigate);
    }, [])
    const PostDetails = useSelector((store)=>{return store.posts.current})

    const changeEdit = ()=>{
        setEdit(!isEdit)
    }

    const[title, setTitle] = useState(PostDetails.title);
    const[cover, setCover] = useState(PostDetails.coverUrl);
    const[tags, setTags] = useState(PostDetails.tags);


    function handleTitle(event){
        setTitle(event.target.value);
        console.log(title);
    }

    function handleCover(event){
        setCover(event.target.value);
        console.log(cover);
    }
    function handleTags(event){
        setTags(event.target.value);
        console.log(tags);
    }

    const Delete = deletePost();

    function renderComponent(){
        if(!isEdit){
            return(
                <div>
                    <div className="clickedNote">
                        <img src={PostDetails.coverUrl} alt="article Image" className="clickedImage"/>
                        <div className="clickedContent">
                        <reactMarkdown><h3>{PostDetails.title}</h3></reactMarkdown>
                        <reactMarkdown><p>{PostDetails.tags}</p></reactMarkdown>
                        </div>
                    </div>
                    {/* <button className="delete"><img src={Delete} alt="" className="delete-image"/></button> */}
                </div>
            ) 
        }

        return(
            <form className="editContent">
                <label htmlFor="">
                    <h1>Editing {PostDetails.title}</h1>
                </label>
                <label htmlFor="">
                    coverUrl: <br />
                    <input type="text" onChange={handleCover}/>
                </label>
                <br />
                <label htmlFor="">
                    title: <br />
                    <input type="text" onChange={handleTitle}/>
                </label>
                <br />
                <label htmlFor="">
                    Tags: <br />
                    <input type="text" onChange={handleTags}/>
                </label>
            </form>
        )
    }


    return(
        <div>
            {renderComponent()}
            <div className="button-control">
                {(!isEdit)? <button className="delete" onClick={()=>{Delete(id, navigate)}}><img src={DeleteIcon} alt="" className="delete-image"/></button>: <div className="none"></div>}
                <button className="icon" onClick={(event)=>{
                    event.preventDefault();
                    changeEdit();
                    if(isEdit){
                        const putPost = editPost();
                        putPost(id, {
                            'title':title,
                            'coverUrl':cover,
                            'tags': tags
                        })
                    }
                    }}><img src={isEdit?save:edit} alt="icon" className="theImage"/></button>
            </div>
        </div>
    )
}

export default Posting;
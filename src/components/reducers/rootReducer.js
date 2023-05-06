import { combineReducers } from "@reduxjs/toolkit";
import PostsReducer from "./postReducer";

export const rootReducer = combineReducers(
    {
        posts : PostsReducer
    }
)
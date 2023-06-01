import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth-reducer";
import PostsReducer from "./postReducer";

export const rootReducer = combineReducers(
    {
        posts : PostsReducer,
        auth: authReducer,
    }
)
import produce from "immer";
import { ActionTypes } from "../actions/actions";

const initialState = {
    authenticated : false
}

export const authReducer = produce((previousState, action ={})=>{
    switch(action.type){
        case ActionTypes.AUTH_USER:
            previousState.authenticated = true;
            break;
        case ActionTypes.DEAUTH_USER:
            previousState.authenticated = false;
            break;
        case ActionTypes.AUTH_ERROR:
            previousState.authenticated = false;
            break;
        default:
            previousState;
    }
}, initialState);
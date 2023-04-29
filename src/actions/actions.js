export const actionType  = {
    INCREMENT: 'INCREMENT',
    DECREMENT:'DECREMENT'
};


export function increment(){
    return{
        type:actionType.INCREMENT,
        payload:null
    }
}


export function decrement(){
    return{
        type: actionType.DECREMENT,
        payload:null
    }
}

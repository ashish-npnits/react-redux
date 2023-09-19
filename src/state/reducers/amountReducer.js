const reducer = (state=0, action) =>{
    if(action.type =='deposit' ){
        return state + action.paylod;
    }
    else if(action.type =='withdraw' ){
        return state - action.paylod;
    }else {
        return state;
    }
}

export default reducer;
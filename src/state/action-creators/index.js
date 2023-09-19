export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type:'deposit',
            paylod: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type:'withdraw',
            paylod: amount
        })
    }
}
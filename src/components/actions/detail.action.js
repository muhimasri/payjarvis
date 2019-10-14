export const addDetail = data => (dispatch) => {
    console.log('this is data', data)
    //this dispatch will use when api call starts
    dispatch({
        type: 'ADD_DETAIL'
    })
    //this dispatch will use when api call success 
    setTimeout(() => {
        dispatch({
            type: 'ADD_DETAIL_SUCCESS',
            payload: {'status': 'success'}
        })
    }, 3000);
    // this dispatch will use when api call returns error
    // dispatch({
    //     type: 'ADD_DETAIL_FAIL',
    //     payload: {'status': 'fail'}
    // })
};
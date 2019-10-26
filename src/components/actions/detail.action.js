import axios from 'axios'
export const addDetail = (data) => (dispatch) => {
    const url = `http://testapp-env.x5zf29xh2j.us-west-2.elasticbeanstalk.com/api/tickets/${data.id}`;
    //this dispatch will use when api call starts
    delete data.error;
    delete data.id
    dispatch({
        type: 'ADD_DETAIL'
    })
    axios.put(url, data)
    .then(function (response) {   
        dispatch( {
            type: 'ADD_DETAIL_SUCCESS',
            payload:response.data.data
            })
        })
        .catch(function (error) {
        dispatch( {
            type: 'ADD_DETAIL_FAILURE',
            payload:error
            })
        });
    //this dispatch will use when api call success 
    // setTimeout(() => {
    //     dispatch({
    //         type: 'ADD_DETAIL_SUCCESS',
    //         payload: {'status': 'success'}
    //     })
    // }, 3000);
    // this dispatch will use when api call returns error
    // dispatch({
    //     type: 'ADD_DETAIL_FAIL',
    //     payload: {'status': 'fail'}
    // })
};

export const setDisplay = (data) => (dispatch) => {
    dispatch({
        type: 'SET_DISPLAY_FORM',
        payload: data
    })
};
import axios from 'axios';

export const addDetail = (data) => (dispatch) => {
    const url = `${process.env.REACT_APP_API}/tickets/${data.id}`;
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
};

export const setDisplay = (data) => (dispatch) => {
    dispatch({
        type: 'SET_DISPLAY_FORM',
        payload: data
    })
};
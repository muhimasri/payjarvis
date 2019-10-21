import axios from 'axios'
export const addDetail = (data) => (dispatch) => {
    console.log('action by jaril', data)
    const url = `http://testapp-env.x5zf29xh2j.us-west-2.elasticbeanstalk.com/api/tickets/${data.id}`;
    //this dispatch will use when api call starts
    delete data.error;
    delete data.id
    dispatch({
        type: 'ADD_DETAIL'
    })
    axios.put(url, data, {headers:{"Access-Control-Allow-Origin": "*"},crossDomain:true})
    .then(function (response) {   
      console.log('this is put api by action', response)     
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
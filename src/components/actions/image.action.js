import axios from 'axios'
export const getImageDataById = (id) => dispatch => {
    dispatch({type: 'GET_IMAGE_DETAIL_DATA'})
    const url = `http://testapp-env.x5zf29xh2j.us-west-2.elasticbeanstalk.com/api/tickets/${id}`;
    axios.get(url)
    .then(function (response) {        
      dispatch( {
          type: 'GET_IMAGE_DETAIL_DATA_SUCCESS',
          payload:response.data.data
        })
    })
    .catch(function (error) {
      dispatch( {
          type: 'GET_IMAGE_DETAIL_DATA_FAILURE',
          payload:error
        })
    });
}

export const uploadTicket = (file,history) => dispatch => {
    dispatch( {
        type: 'UPLOAD_IMAGE',
      })
    const url = 'http://testapp-env.x5zf29xh2j.us-west-2.elasticbeanstalk.com/api/tickets';
    const formData = new FormData();
    formData.append('file', file[0]);
    axios.post(url, formData)
      .then(function (response) {        
        dispatch( {
            type: 'UPLOAD_IMAGE_SUCCESS',
            // payload:response.data.data
          })
          history.push(`/confirm-details/${response.data.data.ticketId}`)
      })
      .catch(function (error) {
        dispatch( {
            type: 'UPLOAD_IMAGE_FAILURE',
            payload:error
          })
      });
}
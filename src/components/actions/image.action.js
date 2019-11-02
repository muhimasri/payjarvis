import axios from 'axios'
export const getImageDataById = (id, history) => dispatch => {
    dispatch({type: 'GET_IMAGE_DETAIL_DATA'})
    const url = `http://localhost:3000/api/tickets/${id}`;
    axios.get(url)
    .then(function (response) {
      // response.data.data.isPaid = true;        
      dispatch( {
        type: 'GET_IMAGE_DETAIL_DATA_SUCCESS',
        payload:response.data.data
      })
      if(response.data.data.isPaid)
        history.push('/payment-receipt')
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
    const url = 'http://localhost:3000/api/tickets';
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
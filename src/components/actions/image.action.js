import axios from 'axios'
export const getTicketDetails = () => {
    return fetch(`assets/json/ticket-details.json`)
        .then(response => response.json())
}

export const uploadTicket = (file,history) => dispatch => {
    dispatch( {
        type: 'UPLOAD_IMAGE',
      })
    const url = 'http://testapp-env.x5zf29xh2j.us-west-2.elasticbeanstalk.com/api/tickets';
    const formData = new FormData();
    formData.append('file', file);
    axios.post(url, formData)
      .then(function (response) {
        dispatch( {
            type: 'UPLOAD_IMAGE_SUCCESS',
            payload:response.data.data
          })
          history.push('/confirm-details')
      })
      .catch(function (error) {
        dispatch( {
            type: 'UPLOAD_IMAGE_FAILURE',
            payload:error
          })
      });
}
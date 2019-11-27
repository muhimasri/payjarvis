import axios from 'axios';

export const uploadTicket = (file) => {
    const url = `${process.env.REACT_APP_API}/tickets`;
    try {
        const formData = new FormData();
        formData.append('file', file[0]);
        return fetch(url, {
            method: 'POST',
            body: formData,
        }).then(response => {
            const json = response.json();
            console.log('Success:', JSON.stringify(json));
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getTicketDetails = (id) => {
    const url = `${process.env.REACT_APP_API}/tickets/${id}`;
    return axios.get(url).then(res => {
      return res.data.data;
    });
}
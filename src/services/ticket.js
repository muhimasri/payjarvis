export const getTicketDetails = () => {
    return fetch(`assets/json/ticket-details.json`)
        .then(response => response.json())
}

export const uploadTicket = (file) => {
    const url = 'http://testapp-env.x5zf29xh2j.us-west-2.elasticbeanstalk.com/api/tickets';
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
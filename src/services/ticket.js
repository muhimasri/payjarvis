export const getTicketDetails = () => {
    return fetch(`assets/json/ticket-details.json`)
        .then(response => response.json())
}
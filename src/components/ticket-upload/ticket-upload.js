import './ticket-upload.scss';
import withHF from '../HOC/withHF';
import React from 'react'

class TicketUpload extends React.Component {

    render() {
        return (
          <h1>This is ticket upload page</h1>
        )
    }
}
export default withHF(TicketUpload)
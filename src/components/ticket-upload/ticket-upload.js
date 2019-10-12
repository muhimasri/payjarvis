import './ticket-upload.scss';
import withF from '../HOC/withF';
import React from 'react';
import { connect } from 'react-redux';

class TicketUpload extends React.Component {
    componentWillMount = () => {
        const { image, history } = this.props;
        if(!image.file || !image.url)
            history.push('/')
    }

    render() {
        const { image } = this.props;
        return (
          <img src={image.url} />
        )
    }
}
function mapStateToProps(state) {
    return {
      image: state.image
    };
  }
export default connect(mapStateToProps, null) (withF(TicketUpload));
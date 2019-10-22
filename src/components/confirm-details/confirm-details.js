import './confirm-details.scss';
import React from 'react'
import withF from '../HOC/withF';
import {addDetail} from '../actions/detail.action';
import {getImageDataById} from '../actions/image.action';
import DetailsForm from '../confirm-details-form';
import DetailsResult from '../confirm-details-result';
import Loading from '../loader';
import { connect } from 'react-redux';

class ConfirmTicket extends React.Component{
    
    state={
        display: true
    }

    componentWillMount = () => {
        const { image, history, match } = this.props;
        if(!match.params.id)
            history.push('/')
        this.props.getImageDataById(match.params.id);
    }

    componentWillReceiveProps = (newProps) => {
        if(newProps.detail_data.response_success)
            this.setState({display:false})
    }

    render(){
        const { language_text, image, detail_data, match} = this.props;
        const fields = language_text.CONFIRM_DETAILS_COMPONENT.FIELDS
        const payments = language_text.CONFIRM_DETAILS_COMPONENT.PAYMENTS
        console.log('This is APIs response for uploaded image', image)
        console.log('This is APIs response for PUT', detail_data)

        return(
            <div className="detail-data">
                {this.state.display ? <div className="steps--main step-one"><span className="step--left active">01</span><span className="step--right">/2</span></div> : <div className="steps--main step-two"><span className="step--left active">02</span><span className="step--right">/2</span></div>  }
                {this.state.display ?
                    <DetailsForm response={image.response_success && image.response_success} language_text={language_text} fields={fields} id={match.params.id} addDetail={(data) => this.props.addDetail(data)}/>
                 : 
                    <DetailsResult payments={payments} {...this.props} />
                }
                {(detail_data.loading || image.loading) && <Loading />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
     image: state.image,
     language_text: state.language.language_text,
     detail_data: state.detail
    };
  } 
export default connect(mapStateToProps, {addDetail, getImageDataById }) (withF(ConfirmTicket));
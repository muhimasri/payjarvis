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
        const { language_text, image, detail_data} = this.props;
        console.log('this is incoming response by high level :->', detail_data)
        const fields = language_text.CONFIRM_DETAILS_COMPONENT.FIELDS
        const payments = language_text.CONFIRM_DETAILS_COMPONENT.PAYMENTS
        return(
            <div className="detail-data">
                {this.state.display ? <div class="steps--main step-one"><span class="step--left active">01</span><span class="step--right">/2</span></div> : <div class="steps--main step-two"><span class="step--left active">02</span><span class="step--right">/2</span></div>  }
                {this.state.display ?
                    <DetailsForm response={image.response_success && image.response_success} language_text={language_text} fields={fields} addDetail={(data) => this.props.addDetail(data)}/>
                 : 
                    <DetailsResult payments={payments} {...this.props}/>
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
export default connect(mapStateToProps, { addDetail, getImageDataById }) (withF(ConfirmTicket));
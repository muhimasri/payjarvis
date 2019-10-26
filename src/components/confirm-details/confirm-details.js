import './confirm-details.scss';
import React from 'react'
import withF from '../HOC/withF';
import {addDetail, setDisplay} from '../actions/detail.action';
import {getImageDataById} from '../actions/image.action';
import DetailsForm from '../confirm-details-form';
import DetailsResult from '../confirm-details-result';
import Loading from '../loader';
import { connect } from 'react-redux';
import Back from './back.png';


class ConfirmTicket extends React.Component{

    componentWillMount = () => {
        const { history, match } = this.props;
        if(!match.params.id)
            history.push('/')
        this.props.getImageDataById(match.params.id, history);
    }

    handleCallBack = () => {
        const { match } = this.props;
        this.props.getImageDataById(match.params.id)
        this.props.setDisplay(true)
    }

    render(){
        const { language_text, image, detail_data, match} = this.props;
        const fields = language_text.CONFIRM_DETAILS_COMPONENT.FIELDS
        const payments = language_text.CONFIRM_DETAILS_COMPONENT.PAYMENTS

        return(
            <div className="detail-data">
                {!detail_data.displayForm && 
                // <input type="button" className="back-btn" value=" Back" onClick={this.handleCallBack} />
                    <a href="#" onClick={this.handleCallBack} className="back-link"><img style={{marginRight: '8px'}} src={Back}></img>Back</a>
                }
                {detail_data.displayForm ? <div className="steps--main step-one"><span className="step--left active">01</span><span className="step--right">/2</span></div> : <div className="steps--main step-two"><span className="step--left active">02</span><span className="step--right">/2</span></div>  }
                {detail_data.displayForm ?
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
export default connect(mapStateToProps, {addDetail, getImageDataById, setDisplay }) (withF(ConfirmTicket));
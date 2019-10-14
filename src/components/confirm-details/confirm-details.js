import './confirm-details.scss';
import React from 'react'
import withF from '../HOC/withF';
import {addDetail} from '../actions/detail.action';
import DetailsForm from '../confirm-details-form';
import DetailsResult from '../confirm-details-result';
import { connect } from 'react-redux';

class ConfirmTicket extends React.Component{
    
    state={
        display: true
    }

    componentWillMount = () => {
        const { image, history } = this.props;
        if(!image.file || !image.url)
            history.push('/')
    }

    componentWillReceiveProps = (newProps) => {
        if(newProps.detail_data.response_success)
            this.setState({display:false})
    }

    render(){
        const { language_text, image, detail_data} = this.props;
        const fields = language_text.CONFIRM_DETAILS_COMPONENT.FIELDS
        const payments = language_text.CONFIRM_DETAILS_COMPONENT.PAYMENTS

        if(detail_data.loading)
            return(<h1>loading</h1>)
        return(
            <div class="confirm-details">
                {this.state.display ? <p>1</p> : <p>2</p> }
                {this.state.display ?
                    <DetailsForm imageUrl={image.url} language_text={language_text} fields={fields} addDetail={(data) => this.props.addDetail(data)}/>
                 : 
                    <DetailsResult payments={payments} {...this.props}/>
                }
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
export default connect(mapStateToProps, {addDetail}) (withF(ConfirmTicket));
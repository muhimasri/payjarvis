import './confirm-details-form.scss';
import ModalImage from "react-modal-image";
import React from 'react';

class ConfirmDetailForm extends React.Component{
    
    state = {
        DATE_OF_VIOLATION: '',
        VIOLATION_NOTICE: '',
        PLATE_NUMBER: '',
        PENALTY_AMOUNT: '',
        EMAIL: '',
        error: []
    }

    componentWillMount = () => {
        const { response } = this.props;
        if(!response)
          return;
        this.setState({
            DATE_OF_VIOLATION: response.dateOfViolation,
            VIOLATION_NOTICE: response.violationNoticeNumber,
            PLATE_NUMBER: response.plateNumber,
            PENALTY_AMOUNT: response.administrativePenaltyAmount
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleAction = () => {
        const { DATE_OF_VIOLATION, VIOLATION_NOTICE, PLATE_NUMBER, PENALTY_AMOUNT, EMAIL } = this.state;
        let error = [];
        if(DATE_OF_VIOLATION === '')
            error.push('DATE_OF_VIOLATION')
        if(VIOLATION_NOTICE === '')
            error.push('VIOLATION_NOTICE')
        if(PLATE_NUMBER === '')
            error.push('PLATE_NUMBER')
        if(PENALTY_AMOUNT === '')
            error.push('PENALTY_AMOUNT')
        if(EMAIL === '')
            error.push('EMAIL')
        this.setState({ error });
        if(error.length > 0) return;
        this.props.addDetail(this.state)
    }

    render(){
        const { response, language_text, fields } = this.props;
        const { DATE_OF_VIOLATION, VIOLATION_NOTICE, PLATE_NUMBER, PENALTY_AMOUNT, error } = this.state;
        return(
        <React.Fragment>
            <h4>{language_text.CONFIRM_DETAILS_COMPONENT.LABEL}</h4>
            <p>{language_text.CONFIRM_DETAILS_COMPONENT.TEXT}</p>
            <ModalImage
                small={response && response.imageUrl}
                large={response && response.imageUrl}
            />
            {/* <img src={imageUrl} className="main-img"/> */}
            <form className="form-data" noValidate autoComplete="off">
                <div className="form-field">
                    <label htmlFor="DATE_OF_VIOLATION">{fields.DATE_OF_VIOLATION}</label><br/>
                    <input className={error.includes('DATE_OF_VIOLATION') && 'error-field'} onChange={this.handleChange.bind(this)} value={DATE_OF_VIOLATION} type="text" name="DATE_OF_VIOLATION" id="DATE_OF_VIOLATION" />
                    <br/>
                    <label htmlFor="VIOLATION_NOTICE">{fields.VIOLATION_NOTICE}</label><br/>
                    <input className={error.includes('VIOLATION_NOTICE') && 'error-field'} onChange={this.handleChange.bind(this)} value={VIOLATION_NOTICE} type="text" name="VIOLATION_NOTICE" id="VIOLATION_NOTICE" />
                    <br/>
                    <label htmlFor="PLATE_NUMBER">{fields.PLATE_NUMBER}</label><br/>
                    <input className={error.includes('PLATE_NUMBER') && 'error-field'} onChange={this.handleChange.bind(this)} value={PLATE_NUMBER} type="text" name="PLATE_NUMBER" id="PLATE_NUMBER" />
                    <br/>
                    <label htmlFor="PENALTY_AMOUNT">{fields.PENALTY_AMOUNT}</label><br/>
                    <input className={error.includes('PENALTY_AMOUNT') && 'error-field'} onChange={this.handleChange.bind(this)} value={PENALTY_AMOUNT} type="text" name="PENALTY_AMOUNT" id="PENALTY_AMOUNT" />
                    <br/>
                    <label htmlFor="EMAIL">{fields.EMAIL}</label><br/>
                    <input className={error.includes('EMAIL') && 'error-field'} onChange={this.handleChange.bind(this)} type="text" name="EMAIL" id="EMAIL" />
                    <br/>
                </div>
                <div className="sub-btn">
                    <input type="button" value="SUBMIT" onClick={this.handleAction.bind(this)}/>
                </div>
            </form>
        </React.Fragment>
        )
    }
}

export default ConfirmDetailForm
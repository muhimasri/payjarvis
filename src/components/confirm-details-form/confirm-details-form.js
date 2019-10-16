import './confirm-details-form.scss';
import ModalImage from "react-modal-image";
import React from 'react';

class ConfirmDetailForm extends React.Component{
    
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render(){
        const { imageUrl, language_text, fields } = this.props;
        return(
        <React.Fragment>
            <h4>{language_text.CONFIRM_DETAILS_COMPONENT.LABEL}</h4>
            <p>{language_text.CONFIRM_DETAILS_COMPONENT.TEXT}</p>
            <ModalImage
            small={imageUrl}
            large={imageUrl}
            />
            {/* <img src={imageUrl} className="main-img"/> */}
            <form className="form-data" noValidate autoComplete="off">
                <div className="form-field">
                    <label htmlFor="DATE_OF_VIOLATION">{fields.DATE_OF_VIOLATION}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="DATE_OF_VIOLATION" id="DATE_OF_VIOLATION" />
                    <br/>
                    <label htmlFor="VIOLATION_NOTICE">{fields.VIOLATION_NOTICE}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="VIOLATION_NOTICE" id="VIOLATION_NOTICE" />
                    <br/>
                    <label htmlFor="PLATE_NUMBER">{fields.PLATE_NUMBER}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="PLATE_NUMBER" id="PLATE_NUMBER" />
                    <br/>
                    <label htmlFor="PENALTY_AMOUNT">{fields.PENALTY_AMOUNT}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="PENALTY_AMOUNT" id="PENALTY_AMOUNT" />
                    <br/>
                    <label htmlFor="EMAIL">{fields.EMAIL}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="EMAIL" id="EMAIL" />
                    <br/>
                </div>
                <div className="sub-btn">
                    <input type="button" value="SUBMIT" onClick={()=>this.props.addDetail(this.state)}/>
                </div>
            </form>
        </React.Fragment>
        )
    }
}

export default ConfirmDetailForm
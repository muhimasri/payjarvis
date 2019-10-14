import './confirm-details-form.scss';
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
            <h1>{language_text.CONFIRM_DETAILS_COMPONENT.LABEL}</h1>
            <h2>{language_text.CONFIRM_DETAILS_COMPONENT.TEXT}</h2>
            <img src={imageUrl} />
            <form className="form-details" noValidate autoComplete="off">
                <div className="form-field">
                    <label for="DATE_OF_VIOLATION">{fields.DATE_OF_VIOLATION}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="DATE_OF_VIOLATION" id="DATE_OF_VIOLATION" />
                    <br/>
                    <label for="VIOLATION_NOTICE">{fields.VIOLATION_NOTICE}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="VIOLATION_NOTICE" id="VIOLATION_NOTICE" />
                    <br/>
                    <label for="PLATE_NUMBER">{fields.PLATE_NUMBER}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="PLATE_NUMBER" id="PLATE_NUMBER" />
                    <br/>
                    <label for="PENALTY_AMOUNT">{fields.PENALTY_AMOUNT}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="PENALTY_AMOUNT" id="PENALTY_AMOUNT" />
                    <br/>
                    <label for="EMAIL">{fields.EMAIL}</label><br/>
                    <input onChange={this.handleChange.bind(this)} type="text" name="EMAIL" id="EMAIL" />
                    <br/>
                </div>
            </form>
            <div className="footer">
                <input type="Button" value="CONTINUE" onClick={()=>this.props.addDetail(this.state)}/>
            </div>
        </React.Fragment>
        )
    }
}

export default ConfirmDetailForm
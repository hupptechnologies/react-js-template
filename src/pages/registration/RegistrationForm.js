import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";

class RegistrationForm extends Component {

    handleChange(e) {
        // this.setState({ value: e.target.value });
    }


    render() {
        console.log(this.props);
        const { handleSubmit } = this.props;

        return (
            <div className="login_form">
                <h2>Create your account</h2>
                <form className="login_form_submit" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" id="email" component="input" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" id="password" component="input" type="password"/>
                    </div>
                    <div className="error_cls">
                    </div>
                    <div className="form_btn">
                        <button type="submit" className="btn">Create</button>
                    </div>
                </form>
                <div className="footer_form">
                    <p>Click here to <Link to="/login">Login</Link></p>
                </div>
            </div>
        );
    }
}

RegistrationForm = reduxForm({
  form: 'registrationForm' // a unique name for this form
})(RegistrationForm);

export default RegistrationForm;
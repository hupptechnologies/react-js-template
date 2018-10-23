import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
class LoginForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="login_form">
                <h2>Login to your account</h2>
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
                        <span>{this.props.login.msg ? this.props.login.msg : ''}</span>
                    </div>
                    <div className="form_btn">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
                <div className="footer_form">
                    <p>Click here to <Link to="/registration">Registration</Link></p>
                </div>
            </div>
        );
    }
}

LoginForm = reduxForm({
  form: 'loginForm' // a unique name for this form
})(LoginForm);

export default LoginForm;
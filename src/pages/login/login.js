import React, { Component } from 'react';
import LoginForm from "./loginForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from "./../../actions/loginAction";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import "./login.scss";

configure({ adapter: new Adapter() });
class Login extends Component {

    submit = (values) => {
        this.props.login(values)
    }
    render() {
        return (
            <LoginForm onSubmit={this.submit} login={this.props.loginReducer}/>
        );
    }
}
const mapStateToProps = ({ loginReducer }) => ({
    loginReducer: loginReducer
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        login,
},dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

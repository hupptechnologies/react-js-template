import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationForm from "./RegistrationForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from "./../../actions/loginAction";
import "./registration.scss";

configure({ adapter: new Adapter() });
class Registration extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			user:{
				email: '',
				password:''
			}
		};
	}
	changeValue=(field,val)=>{
		console.log(field,val);
	}

	submit = (values) => {
        this.props.signup(values)
    }
    render() {
    	console.log(this.props);
        return (
            <div>
                <RegistrationForm onSubmit={this.submit} user={this.state.user} changeValue={this.props.changeValue}/>
            </div>
        );
    }
}
const mapStateToProps = ({ signupReducer }) => ({
    signupReducer: signupReducer
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        signup,
},dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)
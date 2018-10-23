import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from "./../../actions/loginAction";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import "./header.scss";
configure({ adapter: new Adapter() });

class Header extends Component {
    render() {
        return (
        	<header>
        		<div className="formcontrol">
	        		<div className="headerleft">
	        			<h1 className="sitetitle">React</h1>
	        		</div>	
		            <div className="headerright">
		                <button className="btn hello" onClick={this.props.logout}>Logout</button>
		            </div>
	            </div>
            </header>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => ({
    loginReducer: loginReducer.success
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({
      logout
},dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
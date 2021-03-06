import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserDetails } from "./../../actions/userAction";
import { Panel } from 'react-bootstrap';
import "./home.scss";

configure({ adapter: new Adapter() });


const Details = ({details})=>{
    return (
        <Panel >
            <Panel.Body>
            <h4>Name: {details.name}</h4>
            <h6>Year: {details.year}</h6>
            <h6>Pantone value: {details.pantone_value}</h6>
            </Panel.Body>
        </Panel>
    )
}

class Home extends Component {
	componentWillMount(){
		this.props.fetchUserDetails();
	}
    render() {
    	const {details } = this.props.userReducer;
        return (
            <div className="details_cls">
                {
                	details.name
                	?
                	<Details details={details}/>
                	:
                	<p>Loading</p>
                }

            </div>
        );
    }
}
const mapStateToProps = ({ userReducer }) => ({
    userReducer: userReducer
});
const mapDispatchToProps = dispatch => 
    bindActionCreators({
        fetchUserDetails,
},dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);


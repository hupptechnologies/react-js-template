import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserListing } from "./../../actions/userAction";
import { Panel } from 'react-bootstrap';
import "./listing.scss";

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
const USERS = ({data})=>{
    return(
        <div key={data.id}>
            <div className="details_cls">
                <Details details = {data} />
            </div>
        </div>
    )
}

class Listing extends Component {
	componentWillMount(){
		this.props.fetchUserListing();
	}
    render() {
    	const {listing} = this.props.userReducer;
        return (
            <div>
                {
                    listing.length >0 
                    ?
                    listing.map((data)=>{
                        return <USERS data={data} key={data.id}/>
                    }) 
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
        fetchUserListing,
},dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);


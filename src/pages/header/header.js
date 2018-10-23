

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from "./../../actions/loginAction";
import { configure } from 'enzyme';
import { withRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import "./header.scss";
configure({ adapter: new Adapter() });

class Header extends Component {
    render() {
        return (           
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/profile"><a >React-Bootstrap</a></LinkContainer>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="/listing" activeHref="">
                        <NavItem eventKey={1}>
                          Listing
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/profile" activeHref="">
                        <NavItem eventKey={1}>
                          Home
                        </NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} onClick={this.props.logout}>
                    Logout
                    </NavItem>
                </Nav>
            </Navbar>
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

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
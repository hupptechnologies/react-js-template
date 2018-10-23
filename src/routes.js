import React from 'react';
import { Redirect,Switch,Route } from 'react-router';
import Home from './pages/home/home';
import Listing from "./pages/listing/listing";
import Login from './pages/login/login';
import Registration from './pages/registration/Registration';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./App.scss";

class Routes extends React.Component {
    render(){
        return(
            <div className="app_route">
                <Switch>
                    <Route exact path="/" render={() => (
        	           this.props.loginReducer ? <Redirect to="/profile" /> : <Redirect push to="/login" />
        	        )}/>

                    <Route exact path="/profile" render={() => (
                        this.props.loginReducer ? <Home/> : <Redirect push to="/login" />
                    )}/>
                    <Route exact path="/listing" render={() => (
                        this.props.loginReducer ? <Listing/> : <Redirect push to="/login" />
                    )}/>

                    <Route exact path="/login" render={() => (
                        this.props.loginReducer ? <Redirect to="/profile" /> : <Login/>
                    )}/>
                    <Route exact path="/registration" render={() => (
                         this.props.loginReducer ?  <Redirect to="/profile" /> : <Registration/>
                    )}/>

                    <Route path="**" render={() => (
                        this.props.loginReducer ? <Redirect to="/profile" /> : <Redirect to="/login" />
                    )}/>
                </Switch>
            </div>
        )
    }
}
// export default Routes;
const mapStateToProps = ({ loginReducer }) => ({
    loginReducer: loginReducer.success
});

export default withRouter(connect(
    mapStateToProps
)(Routes));

import React from 'react';
import { Redirect,Switch,Route } from 'react-router';
import Home from './pages/home/home';
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
        	           this.props.loginReducer ? <Redirect to="/home" /> : <Redirect push to="/login" />
        	        )}/>

                    <Route exact path="/home" render={() => (
                        this.props.loginReducer ? <Home/> : <Redirect push to="/login" />
                    )}/>

                    <Route exact path="/login" render={() => (
                        this.props.loginReducer ? <Redirect to="/home" /> : <Login/>
                    )}/>
                    <Route exact path="/registration" render={() => (
                         this.props.loginReducer ?  <Redirect to="/home" /> : <Registration/>
                    )}/>

                    <Route path="**" render={() => (
                        this.props.loginReducer ? <Redirect to="/home" /> : <Redirect to="/login" />
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

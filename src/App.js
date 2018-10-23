import React, { Component } from 'react';
import Routes from "./routes";
import { connect } from 'react-redux';
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="main_app">
                {this.props.loginReducer === true ? <Header/> : ''}
                <Routes/>                
                {this.props.loginReducer === true ? <Footer/> : ''}
            </div>
        );
    }
}
const mapStateToProps = ({ loginReducer }) => ({
    loginReducer: loginReducer.success
});

export default connect(mapStateToProps,null)(App);

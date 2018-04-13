import React, { Component } from 'react';
import './Welcome.css'

import Logo from '../../images/logo.jpg'

import LoginForm from '../Login/LoginForm'

class WelcomeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggeIn: false,
        }
    }

    render(){
        return (
            <div className="container-fluid" id="welcomeContainer">
                <div className="row">
                <div className="col-md-3 col-sm-3 h-100 d-flex align-items-center d-inline-block leftSide">
                    <img src={Logo} alt="Lainie's Learning Lane" className="welcomeLogo"/>
                    <div className="welcomeForm">
                        <h2>Welcome to Lainie's Learning Lane!</h2>
                        <LoginForm />
                    </div>
                </div>

                <div className="col-md-9 col-sm-9 h-100 d-inline-block bg-dark text-white">
                    One of three columns
                </div>
                </div>
            </div>
        )
    }
}

export default WelcomeContainer;
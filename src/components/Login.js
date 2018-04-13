import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { login } from '../utils/auth-api';
import { Link } from 'react-router-dom';


import "./Login/Login.css"

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginData: {
                email: '',
                password: '',
            }
        }
    }
    setData = (e) => {
       let object = this.state.loginData;
       object[e.target.name] = e.target.value;
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log(e);
        return login(this.state.loginData, this.props);
        // localStorage.setItem('isAuthenticated', true);
        // this.props.history.push('/celebrity-jokes');
    }
    render () {
        return (
            <div id="text-center" className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-4" id="loginForm">
                        <h1>Please log in</h1>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                            <Label for="email" hidden>Email</Label>
                            <Input type="email" onChange={ this.setData } name="email" id="email" placeholder="Email" />
                            </FormGroup>
                            {' '}
                            <FormGroup>
                            <Label for="password" hidden>Password</Label>
                            <Input type="password" onChange={ this.setData } name="password" id="password" placeholder="Password" />
                            </FormGroup>
                            {' '}
                            <Button>Submit</Button>
                            <div>
                            <p><Link to="/forgot">Forgot my password?</Link></p>
                            <p><Link to="/signup">No account?, Sign up!</Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
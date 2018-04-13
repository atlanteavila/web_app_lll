import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from 'react-router-dom';
import {Elements} from 'react-stripe-elements';
import {CardElement} from 'react-stripe-elements';


import "./SignUp.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        accountType: "Parent",
        planType: "",
        cardToken: ""
      }
    };
  }

  render() {
    return (
      <div id="text-center" className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-4" id="loginForm">
            <h1 className="signUpH1">Welcome, please create your account below!</h1>
            <Elements>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Input
                  type="firstName"
                  onChange={this.setData}
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Input
                  type="lastName"
                  onChange={this.setData}
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Input
                  type="email"
                  onChange={this.setData}
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Input
                  type="password"
                  onChange={this.setData}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Input type="select">
                <option value="Yearly">Yearly Plan ($49 / year)</option>
                <option value="Monthly">Monthly Plan ($5 / month)</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <CardElement style={{base: {fontSize: '13px'}}} />
              </FormGroup>
              <Button>Submit</Button>
              <div>
                <p>
                  <Link to="/forgot">Already have an account. Log in.</Link>
                </p>
                <p>
                  <Link to="/signup">No account?, Sign up!</Link>
                </p>
              </div>
            </Form>
            </Elements>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  Row,
  Col,
  CardTitle
} from "reactstrap";
import classnames from "classnames";
import { Elements } from "react-stripe-elements";
import { CardElement, injectStripe } from "react-stripe-elements";

import { register } from "../../utils/auth-api";
import "./LoginForm.css";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      activeForm: "1",
      signUpError: false,
      registerData: {
        user: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          accountType: "Parent",
          planType: "Yearly"
        }
      }
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  setRegData = e => {
    let object = this.state.registerData;
    object[e.target.name] = e.target.value;
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      activeForm: "2"
    });
    return;
  }

  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink
              className={
                classnames({ active: this.state.activeTab === "1" }) +
                " loginBtn"
              }
              onClick={() => {
                this.toggle("1");
              }}
            >
              Log in
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={
                classnames({ active: this.state.activeTab === "2" }) +
                " signupBtn"
              }
              onClick={() => {
                this.toggle("2");
              }}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Card body>
                  <form>
                    <input
                      className="w-100"
                      type="text"
                      name="email"
                      id="emailL"
                      placeholder="Email"
                    />
                    <input
                      className="w-100"
                      type="password"
                      name="password"
                      id="passwordL"
                      placeholder="Password"
                    />
                    <Button>Login</Button>
                  </form>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card body>
                  <form
                    onSubmit={this.handleRegister}
                    className={classnames(
                      { active: this.state.activeForm === "1" },
                      { inactive: this.state.activeForm === "2" }
                    )}
                  >
                    <CardTitle>Step 1</CardTitle>
                    <input
                      onChange={this.setRegData}
                      className="w-100"
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name" 
                      required
                    />
                    <input
                      onChange={this.setRegData}
                      className="w-100"
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name" 
                      required
                    />
                    <input
                      onChange={this.setRegData}
                      className="w-100"
                      type="text"
                      name="email"
                      id="emailR"
                      placeholder="Email"
                      required
                    />
                    <input
                      onChange={this.setRegData}
                      className="w-100"
                      type="password"
                      name="password"
                      id="passwordR"
                      placeholder="Password"
                      required
                    />
                    <select
                      onChange={this.setRegData}
                      className="w-100 mb-3"
                      name="planType"
                      id="planType"
                      placholder="Billing cycle"
                      required
                    >
                      <option>Choose Billing Cycle</option>
                      <option value="Yearly">Yearly $39.99</option>
                      <option value="Monthly">Monthly $4.99</option>
                    </select>
                    <Button>Continue</Button>
                  </form>
                  <Elements>
                    <CardForm
                      activeForm={this.state.activeForm}
                      registerData={this.state.registerData}
                    />
                  </Elements>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

class _CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: this.props.activeForm,
      registerData: this.props.registerData
    };
    this.handleStripe = this.handleStripe.bind(this);
  }
  handleStripe(e) {
    e.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => {
          const user = this.state.registerData;
          user.accountType = "Parent";
          user.cardToken = payload.token.id;
          return user;
        })
        .then(user => {
          return register(user);
        })
        .then(regStatus => {       
          if (regStatus === true) {
            this.setState({
              activeForm: "3"
            })
          } else {
            this.setState({
              signUpError: "An error occured, please refresh and try again."
            })
          }
        });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeForm === "2") {
      this.setState({ activeForm: "2" });
    }
  }
  render(props) {
    return (
      <div>
        <form
          className={classnames(
            { active: this.state.activeForm === "2" },
            { inactive: this.state.activeForm === "1" || this.state.activeForm === "3" }
          )}
          onSubmit={this.handleStripe}
        >
          <CardTitle>Step 2</CardTitle>
          <CardElement style={{ base: { fontSize: "13px" } }} />
          <Button className="signupButton">Sign Up!</Button>
          {this.state.signUpError ? <div>An error occured, please refresh and try again.</div> : <div></div>}
        </form>
        <div className={classnames(
          { active: this.state.activeForm === "3" },
          { inactive: this.state.activeForm === "1" || this.state.activeForm === "2" }
        ) + " successMsg"}>
          <h3>Success!</h3>
          <p> Hey {this.state.registerData.firstName}, </p>
          <p>Thank you for registering! Please continue to confirm your email and finish setting up your account!</p>
          <p>See you back here soon!</p>
          <p> Sincerely,</p>
          <p>Lainie's Learning Lane</p>
        </div>
      </div>
    );
  }
}

const CardForm = injectStripe(_CardForm);

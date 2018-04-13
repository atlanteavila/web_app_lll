import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
} from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';

import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import LoginForm from './components/Login';
import SignUp from './components/SignUp'
import WelcomeContainer from './components/Welcome';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// const Root = () => {
class Root extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      authed: false
    }
  }
  isAuthenticated = () => {
    const authed = localStorage.getItem('isAuthenticated') === "true";
    this.setState((prevState) => {
      return {
        authed: authed
      }
    })
  }
  componentWillMount(){
    this.isAuthenticated()
  }
  render(){
    return (
      <StripeProvider apiKey="pk_test_np9tCO61Dq1SvfImAWJMowiB">
        <Router>
          <div className="intro">
            <Switch>
            <Route exact path="/" component={WelcomeContainer} />
            <Route exact path="/dashboard" component={FoodJokes} />
            <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignUp} />
              <Route path="/celebrity-jokes" component={ () => <CelebrityJokes checkAuth={this.isAuthenticated} isAuthenticated={this.state.authed}  /> } />
            </Switch>
          </div>
        </Router>
      </StripeProvider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
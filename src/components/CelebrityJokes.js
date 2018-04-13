import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getCelebrityData } from '../utils/chucknorris-api';

class CelebrityJokes extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        jokes: [],
        loggedIn: false,
        logInFailed: "Sorry, your authentication failed. Please double check your details and try again."
    };
    this.getCelebrityJokes = this.getCelebrityJokes.bind(this);
  }
  getCelebrityJokes() {
    getCelebrityData().then((jokes) => {
      this.setState({ jokes: jokes.celebrityJokes });
    });
  }
  componentWillMount(){
    if(localStorage.getItem("isAuthenticated") !== "true") {
      this.props.history.push('/login');
      return false
    }
    this.getCelebrityJokes();
  }

  render() {
    const jokes  = this.state.jokes || [{id: 8888, joke: 'Chuck norris once got bit by a snake, after three anguishing days... The snake finally died'}];
    return (
      <div>
        <h3 className="text-center">Privileged Chuck Norris Celebrity Jokes</h3>
        <hr/>

        {jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div> 
          )) 
        }
      </div>
    );
  }
}

export default withRouter(CelebrityJokes);
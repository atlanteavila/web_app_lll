import React, { Component } from 'react';
import { getFoodData } from '../utils/chucknorris-api';


class FoodJokes extends Component {

  constructor() {
    super()
    this.state = { jokes: [] };
  }

  getFoodJokes() {
    getFoodData().then((jokes) => {
      this.setState({ jokes: jokes.foodJokes });
    });
  }

  componentDidMount() {
    this.getFoodJokes();
  }

  render() {

    const jokes = this.state.jokes;
    return (
      <div>
        <h3 className="text-center">Chuck Norris Food Jokes</h3>
        <hr/>
        
        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}
      </div>
    );
  }
}

export default FoodJokes;
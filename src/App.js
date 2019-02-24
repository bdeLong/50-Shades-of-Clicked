import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board"
import images from './image'

class App extends Component {
  state = {
    message: "Click all 50 shades of grey without clicking one twice",
    score: 0,
    images: images,
    clicked: [],
    highScore: 0
  };

  setGame = () => {

  }

  handleImageClickById = (imageId) => {
    let clicked = this.state.clicked.slice(0);
    console.log("Checking", clicked, imageId);
    // is this imageId in clicked
    if (clicked.findIndex(item => imageId === item) === -1) {
      clicked.push(imageId);
      this.setState({
        "clicked": clicked,
        "score": this.state.score + 1,
        "message": "You're dominating! Keep Clicking."
      })
    }

    else if (this.state.score === 50) {
      this.setState({
        "message": "Winner Winner, Chicken Dinner."
      })
    }

    else {
      // you lose, start over
      this.setState({
        "message": "You got beat into submission :(",
        "score": 0,
        "clicked": []
      })
    }
    // rearrange images
    let images = this.state.images.slice(0);
    images.sort(() => Math.random() - 0.5);
    this.setState({ images });
    console.log("handling click for ", imageId);

  }

  render() {
    return (
      <div className="App">
        <Header
          message={this.state.message}
          score={this.state.score}
          total={this.state.images.length} />
        <Board
          images={this.state.images}
          clickHandler={this.handleImageClickById}
        />
      </div>
    );
  }
}

export default App;

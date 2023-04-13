import React, { Component } from "react";

class Horloge extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { date: new Date() };
  //   }

  state = {
    date: new Date()
  };

  componentDidMount() {
    //console.log("composant monté");

    this.time = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    // console.log("composant affiché");
    return (
      <h1>
        Date : {this.state.date.toLocaleDateString()}
        <br />
        Horloge : {this.state.date.toLocaleTimeString()}
      </h1>
    );
  }
}

export default Horloge;

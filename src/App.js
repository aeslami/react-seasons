import React, { Component } from 'react';

class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const {
          coords: { latitude: lat }
        } = position;
        this.setState({ lat });
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>latitude: {this.state.lat}</div>;
    }
    return <div>Loading</div>;
  }
}

export default App;

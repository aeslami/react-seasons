import React, { Component } from 'react';
import SeasonDisplay from './components/SeasonDisplay';

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

  renderSeason() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      const { lat } = this.state;
      return <SeasonDisplay lat={lat} />;
    }
    return <div>Loading</div>;
  }

  render() {
    return <div>{this.renderSeason()}</div>;
  }
}

export default App;

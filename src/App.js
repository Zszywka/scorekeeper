import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        { name: 'Alicja', score: 5, },
        { name: 'Remi', score: 0, }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <PlayersList players={this.state.players} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate}/>
      </div>
    );
  }
}

export default App;

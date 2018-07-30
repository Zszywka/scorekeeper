import uuid from 'uuid';
import React, { Component } from 'react';
import './App.css';
//importujemy liste graczy
import PlayersList from './components/PlayersList/PlayersList';

class App extends Component {
  constructor() {
    super();
    //stan poczatkowy aplikacji
    this.state = {
      players: [
        { name: 'Alicja', score: 5, },
        { name: 'Remi', score: 0, }
      ]
    }
  }

  //funkcja do dodawania/odejmowania punktow
  //konieczny plugin -> http://babeljs.io/docs/en/babel-plugin-transform-class-properties/
  //lub: onScoreUpdate={() => this.onScoreUpdate}
  //lub: this.onScoreUpdate = this.onScoreUpdate.bind(this);
  //id gracza i liczbe punktow przyjmuje f.
  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          //object spread operator
          //to to samo co:
          //return Object.assign({}, player, { score: player.score + scoreChange });
          // zwraca nowy obiekt, na podstawie obiektu player,ale podmienia score
          //na nową wartość (dodając scoreChange do aktualnego stanu punktow gracza)
          //np score = player.score(masz teraz 10pkt) + scoreChange(straciles 2) wiec nowe score ma 8pkt
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    })
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
      id: uuid.v4()
    }
    this.setState({
      players: [
        ...this.state.players, newPlayer
      ]
    })
  }

  onPlayerRemove = playerIndex => {
    this.setState({
      players: this.state.players.filter(
        //filtruje i zostawia tylko te spelniajace warunek
        (player, index) => index !== playerIndex
      )
    })
  }

  render() {
    return (
      <div className="App">
        <PlayersList players={this.state.players} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove}/>

      </div>
    );
  }
}

export default App;

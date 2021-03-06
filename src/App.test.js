import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import Player from "./components/Player/Player";
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App players={[]} />);
  const players = [
    {
      name: 'Basia',
      score: 4
    }
  ];
  const playerScoreExpected = 9;
  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state().players;

  expect(playersAfterUpdate[0].score).toEqual(playerScoreExpected);
});


it('should add newPlayer to app state', () => {
	const app = shallow(<App />);
	const onPlayerAdd = app.find(AddPlayer).prop('onPlayerAdd');
	onPlayerAdd("Tom");
	const players = app.state('players');
	expect(players.length).toEqual(3);
	expect(players[2].name).toEqual('Tom');

	expect(players[2].score).toEqual(0);
});

it('should remove player from app state', () => {
	const app = mount(<App />);
	const player = app.find(Player).first();
	const onPlayerRemove = player.find('.Player__button').at(2);
	onPlayerRemove.simulate('click')
	const players = app.state('players');

	expect(players.length).toEqual(1);
});

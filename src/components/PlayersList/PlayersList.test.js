import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('renders correct numbers of players', () =>{
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Pawel',
      score: 0
    }
  ]

  const playerComponent = shallow(<PlayersList players={players} />);
  console.log(playerComponent.debug());

  const expectedPlayersNumber = playerComponent.find(Player).length;

  expect(expectedPlayersNumber).toEqual(2);
});

it('should call on onScoreUpdate when onPlayerScoreChange is clicked', () =>{
  const players = [
    {
      name: 'Basia',
      score: 5
    },
    {
      name: 'Pawel',
      score: 0
    }
  ]

  const mockedOnScoreUpdate = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  const firstPlayer = playerComponent.find(Player).first();
  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  onPlayerScoreChange(10);
  
  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
})


it("should call onPlayerRemove", () => {
  const players = [
    {
      name: 'Kasia',
      score: 10
    },
    {
      name: 'Tom',
      score: 9
    }
  ];
  const mockedonPlayerRemove = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onPlayerRemove={mockedonPlayerRemove} />);

  const firstPlayer = playerComponent.find(Player).first();
  const onPlayerRemove = firstPlayer.prop('onPlayerRemove');
  onPlayerRemove();

  expect(mockedonPlayerRemove).toBeCalled();
});

import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow} from 'enzyme';

it('renders without crashing', () => {
  //trezba przekazac {} z pusta [] bo nie bedzie czego mapowac
  shallow(<PlayersList players={[]} />);
});

//przekazane dane 2 graczy
it('renders correct numbers of players', () =>{
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antoś',
      score: 0
    }
  ]
  const playerComponent = shallow(<PlayersList players={players} />);
  // console.log(playerComponent.debug());
  //znajdz graczy i ich policz
  //zamist szukac elem 'li'-> szukaj komponentu Player
  // const expectedPlayersNumber = playerComponent.find('li').length;
  const expectedPlayersNumber = playerComponent.find(Player).length;
  //sprawdz czy ich liczba jest taka jak sie spodziewalismy
  expect(expectedPlayersNumber).toEqual(2);
});

//czy onScoreUpdate jest wywoływany
//jeśli w komponencie Player wywola sie onPlayerScoreChange->
//-> wywołanie onScoreUpdate w PlayersList.
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
  //wyrenderowanie komponentu
  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  //Wybierzmy jeden z komponentów Player, na którym będzie testować działanie callbacku:
  const firstPlayer = playerComponent.find(Player).first();
  //Nie możemy zasymulować kliknięcia przycisku w tym komponencie,
  //ale mamy dostęp do jego propsów. Możemy więc dostać się do funkcji onPlayerScoreChange
  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  //mamy juz funkcje onPlayerScoreChange i mozemy ja wywolac z jakas wartoscia
  onPlayerScoreChange(10);
  //wybraliśmy pierwszego gracza(indeksem 0) i ustaliliśmy zmianę punktową na 10
  // to asercja:
  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
})

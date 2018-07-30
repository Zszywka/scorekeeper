import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

//sprawdzał, czy przekazane w props imię gracza się wyświetla:
it('renders correct name', () => {
  //zmienna z przykladowym imieniem
  const playerNamePassed = 'Ania';
  //renderujemy komponent za pomoca f. shallow przekazujac w/w zmienna
  const playerComponent = shallow(<Player name={playerNamePassed} />);
  //za pomoca find szukamy w wyrenderowanym komponencie elem z klasa Player_name
  //a nastepnie za pomoca funkcji text wyciagamy tekst z tego elem.
  const playerNameRendered = playerComponent.find('.Player__name').text();
  //porowanie dwoch wartosci: te ktora przekazalismy i te ktora sie wyswietla
  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('render correct score', () => {
  const playerScorePassed = 10;

  const playerComponent = shallow(<Player score = {playerScorePassed} />);
  //po wyszukaniu find i jego zawartosci text-> lancuch znakow/konwersja na liczbe-> met. Number
  const playerScoreRendered = Number(playerComponent.find('.Player__score').text());

  expect(playerScoreRendered).toEqual(playerScorePassed);
});

//czy klikniecia w button dzialaja (+)
it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  //mockedOnScoreChange-> f.dostarczona jest JEST,
  //kiedy chcemy przetestowac callback (np po kliknieciu w przycisk ma sie odpalic onPlayerScoreChange)
  //przekazany w props, mozemy go zasymulowac-> jest.fin(); MOCKOWANIE
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  //symulacja klikniecia->(f.find szuka przycisku  & f.simulate do zasymulowania click
  const plusButton = playerComponent.find('.Player__button').first();
  plusButton.simulate('click');
  //spr czy udawana f zostala wywolana(f.toBeCalled = f. toHaveBeenCalled)f.JEST
  //expect(mockedOnPlayerScoreChange).toHaveBeenCalled();
  //w naszym komponencie kliknięcie powoduje wywołanie funkcji z wartością 1->
  //zmieniamy toBeCalled ->toBeCalledWith i dodamy wartość, jakiej się spodziewamy.
  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

// czy klikniecia w button dzialaja (-)
it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  //guzik musi miec inna nazwe to funkcja find znajdzie dwa guziki(f. first() = at(0), last(), at(1)-drugi el.
  const minusButton = playerComponent.find('.Player__button').at(1);
  minusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

//czy klikniecie w button dziala (x)
it('should call onPlayerScoreChange when remove button is clicked', () => {
  const mockedOnPlayerRemove = jest.fn();
  const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);
  const a = playerComponent.length -1;

  const removeButton = playerComponent.find('.Player__button').last();
  removeButton.simulate('click');

  expect(mockedOnPlayerRemove).toHaveLength(a);
});

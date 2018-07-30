import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import Player from "./components/Player/Player";
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
// //smoke test(they only check if the component renders at all/without expect...)
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   //clean <div></div>
//   ReactDOM.unmountComponentAtNode(div);
// });

//the same
it('renders without crashing', () => {
  shallow(<App />);
});

// return (
//   <div>
//     <Button />
//   <div>
// )
//shallow render:
// <div>
//   <Button />
// <div>
//mount render:
// <MyApp>
//   <div>
//     <Button>
//       <button>
//         click me!
//       </button>
//     </Button>
//   </div>
// </MyApp>

//testowanie f.onScoreUpdate
it('should update player score', () => {
  //wyrenderowany component App(cala apke) wraz pusta tablica graczy
  const appComponent = shallow(<App players={[]} />);
  //tworzymy nowych graczy
  const players = [
    {
      name: 'Basia',
      score: 4
    }
  ];
  const playerScoreExpected = 9;
  //dodanie players do stanu aplikacji
  //setState m. ENZYME, do komponentu dodanie gracza
  appComponent.setState({ players });
  //chcemy się dostać do komponentu PlayersList, a dokładnie wywołać onScoreUpdate
  //Musimy znaleźć komponent PlayersList a następnie wśród jego props, szukamy interesującej f.
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  //wywolanie wyszukanej funckji:
  //onScoreUpdate(i, points)
  onScoreUpdate(0, 5);
  //dostajemy sie do componentu i zobaczyc czy stan sie zmienil(rownoznaczne zapisy)
  //const playersAfterUpdate = appComponent.state('players');
  const playersAfterUpdate = appComponent.state().players;
  //sprawdzenie czy graczowi dodano 5 punktow do stanu z poczatkowego
  expect(playersAfterUpdate[0].score).toEqual(playerScoreExpected);
});

//sprawdzi, czy nowy gracz będzie dodany do stanu aplikacji.
it('should add newPlayer to app state', () => {
  //wyrenderowany komponent App
	const app = shallow(<App />);
  //musimy dostać się do komponentu AddPlayer
	const onPlayerAdd = app.find(AddPlayer).prop('onPlayerAdd');
  //wywołać onPlayerAdd z jakimś imieniem
	onPlayerAdd("Tom");
  //odczytanie stanu aplikacji za pomocą state:
	const players = app.state('players');
  //czy liczba graczy po dodaniu jest równa 1,
	expect(players.length).toEqual(3);
  //czy imię pierwszego gracza się zgadza
	expect(players[2].name).toEqual('Tom');
  //czy nowo dodany gracz zaczyna z zerowym kontem (lub inną wartością ustaloną wartością).
	expect(players[2].score).toEqual(0);
});

//usuwanie gracza
it('should remove player from app state', () => {
  //wyrenderowany komponent App
	const app = mount(<App />);
  //dostać się do komponentu Player( do pierwszego gracza)
	const player = app.find(Player).first();
  //symulacja klikniecia->(f.find szuka przycisku 3ciego z rzedu .at(2)
	const onPlayerRemove = player.find('.Player__button').at(2);
  //f.simulate do zasymulowania click
	onPlayerRemove.simulate('click')
  //dostanie sie do stanu App.js do {players}
	const players = app.state('players');
  //porownuje ilosc graczy(bylo dwoch po odjeciu 1 jest 1) z oczekiwana iloscia jednego
	expect(players.length).toEqual(1);
});

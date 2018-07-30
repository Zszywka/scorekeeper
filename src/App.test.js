import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
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
// it('should update player score', () => {
//   //wyrenderowany component App(cala apke) wraz pusta tablica graczy
//   const appComponent = shallow(<App players={[]} />);
//   //tworzymy nowych graczy
//   const players = [
//     {
//       name: 'Basia',
//       score: 4
//     }
//   ];
//   const playerScoreExpected = 9;
//   //dodanie players do stanu aplikacji
//   //setState m. ENZYME, do komponentu dodanie gracza
//   appComponent.setState({ players });
//   //chcemy się dostać do komponentu PlayersList, a dokładnie wywołać onScoreUpdate
//   //Musimy znaleźć komponent PlayersList a następnie wśród jego props, szukamy interesującej f.
//   const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
//   //wywolanie wyszukanej funckji:
//   //onScoreUpdate(i, points)
//   onScoreUpdate(0, 5);
//   //dostajemy sie do componentu i zobaczyc czy stan sie zmienil(rownoznaczne zapisy)
//   //const playersAfterUpdate = appComponent.state('players');
//   const playersAfterUpdate = appComponent.state().players;
//   //sprawdzenie czy graczowi dodano 5 punktow do stanu z poczatkowego
//   expect(playersAfterUpdate[0].score).toEqual(playerScoreExpected);
// });

// it('should update player score', () => {
//     const players = [
//         {
//           name: 'Ania',
//           score: 5
//         }
//    ];
//
//     const playerScoreExpected = 10;
//
//     const appComponent = shallow(<App />);
//     appComponent.setState({ players });
//     const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
//     onScoreUpdate(0, 5);
//     const playersAfterUpdate = appComponent.state('players');
//     expect(playersAfterUpdate[0].score).toEqual(playerScoreExpected);
// });

// it('should add Marta to app state', () => {
// 	const app = shallow(<App />);
// 	const onPlayerAdd = app.find(AddPlayer).prop("onPlayerAdd");
// 	onPlayerAdd("Marta");
//
// 	const players = app.state("players");
//
// 	expect(players.length).toEqual(3);
// 	expect(players[2].name).toEqual("Marta");
// 	expect(players[2].score).toEqual(0);
//
// });

// it("should remove player from app state", () => {
// 	const app = mount(<App />);
// 	const player = app.find(Player).first();
// 	const onPlayerRemove = player.find(".Player__button").at(2);
// 	onPlayerRemove.simulate("click")
//
// 	const players = app.state("players");
//
// 	expect(players.length).toEqual(1);
//
// });

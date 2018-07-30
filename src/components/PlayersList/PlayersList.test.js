//import pliku ktory testujemy
import PlayersList from './PlayersList';
//importujemy player.js zeby nie przekazywac 'li'/'span' tylko caly komponentt Player(do f.find)
import Player from '../Player/Player';
import React from 'react';
import { shallow} from 'enzyme';
//sprawdza czy poprawnie przekazuje obeikt/element do komponentu PlayerList.js
it('renders without crashing', () => {
  //trzeba przekazac {} z pusta tablica graczy[] bo nie bedzie czego mapowac w kodzie
  //przyjmuje ze domyslnie bedziemy przekazywac pusta tablice
  shallow(<PlayersList players={[]} />);
});

//sprawdza czy renderujemy poprawna ilosc graczy
it('renders correct numbers of players', () =>{
  //stworzymy sobie tablice z 2 graczy
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
  //przekazujemy tablice do komponentu
  const playerComponent = shallow(<PlayersList players={players} />);
  //gdy wynik renderowania komponentu jest inny od spodziewanego(mozna sprawdzic)
  console.log(playerComponent.debug());
  //znajdz graczy i ich policz
  //zamist szukac elem 'li'-> szukaj komponentu Player
  // const expectedPlayersNumber = playerComponent.find('li').length;
  const expectedPlayersNumber = playerComponent.find(Player).length;
  //sprawdz czy ich liczba jest taka jak sie spodziewalismy(spodziewamy sie 2 graczy-> toEgual(2))
  //expectedPlayersNumber-> to prawdziwa liczba graczy w app
  expect(expectedPlayersNumber).toEqual(2);
});

//czy onScoreUpdate jest wywoływany
//jeśli w komponencie Player wywola sie onPlayerScoreChange->
//-> wywołanie onScoreUpdate w PlayersList.
it('should call on onScoreUpdate when onPlayerScoreChange is clicked', () =>{
  //utworzenie tablicy graczy
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
  //jeśli w komponencie Player zostanie wywołana onPlayerScoreChange,
  //to powinno to pociągnąć za sobą wywołanie onScoreUpdate w PlayersList
  //interesuje nas tylko wywolanie onScoreUpdate(symulujemy wywolanie tej f.)
  const mockedOnScoreUpdate = jest.fn();
  //wyrenderowanie komponentu
  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  //Wybierzmy jeden z komponentów Player, na którym będzie testować działanie callbacku:(pierwszy gracz)
  const firstPlayer = playerComponent.find(Player).first();
  //Nie możemy zasymulować kliknięcia przycisku w tym komponencie Player
  //ale mamy dostęp do jego propsów. Możemy więc dostać się do funkcji onPlayerScoreChange
  //pop(przekazujemy nazwe propsa z Players.js do ktorej chcemy sie dostac)
  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  //mamy juz funkcje onPlayerScoreChange i mozemy ja wywolac z jakas wartoscia
  //10 to zdobyte punkty
  onPlayerScoreChange(10);
  //wybraliśmy pierwszego gracza.first (indeksem 0) i ustaliliśmy zmianę punktową na 10
  // to asercja:
  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
})

//testowanie usuwania gracza
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

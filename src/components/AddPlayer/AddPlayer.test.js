import AddPlayer from './AddPlayer';
import Player from '../Player/Player';
import React from 'react';
import {shallow, mount} from 'enzyme';

//czy poprawnie sie renderuje
it('renders without crashing', () => {
  shallow(<AddPlayer  />);
});

//symulacja wyslania nazwy gracza
//sprawdzał, czy callback onPlayerAdd będzie się wywoływał z odpowiednim imieniem.
it('renders correct name', () => {
  //zasymulowanie callbacka onPlayerAdd(czy klikniecie przekaze nazwe gracza)
  const onPlayerAdd = jest.fn();
  //przekazemy do komnponentu tego callbacka:
  //uzywamy mount bo pozniej chcemy uzyc getDOMNode()
  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
  //zasymulowanie wpisania imienia
  //dostajemy sie do pola imput(metoda find()), używamy first, gdyż mamy dwa elementy input
  //(ale dostalismy sie do calego el. pierwszego) i ustawiamy jego wartosc(getDOMNode()-> dostajemy sie do wartosci inputa)
  //f getDOMNode() dziala tylko w mount!
  const nameInput = addPlayerComponent.find('input').first().getDOMNode();
  //Skoro mamy już nasz input, to nadajmy mu jakąś wartość
  nameInput.value = 'Kamila';
  //znajdziemy formularz w naszym komponencie
  const form = addPlayerComponent.find('form');
  //symulacja wyslania
  form.simulate('submit');
  //sprawdzić, czy onPlayerAdd odpala się z prawidłowym imieniem:
  expect(onPlayerAdd).toBeCalledWith('Kamila');
});

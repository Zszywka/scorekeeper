//prosty formularz dodajacy gracza
import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {
  //stworzmy zmeinna input:
  let input;

  //wysyla wartości inputa (imienia gracza) do App.js
  const onSubmit = (event) => {
    //zablokowanie wyslania formularza i przeladowania strony
    event.preventDefault();
    //dostanie sie do pola text i wyciagniecie jego wartosci(trezba stworzy zmienna let
    //i w impucie wpisac met ref )
    //przekazać imię do komponentu App(za pomoca callbacka onPlayerAdd)
    props.onPlayerAdd(input.value);
    //czyszczenie pola po dodaniu gracza
    input.value = '';
  }
  //met ref z REACTA,mozna przypisac dowolny elem DOM do zmiennej
  //ref={(node) => input = node} -> mamdy dostep do input.value
  return (
    <form className="AddPlayer" onSubmit={onSubmit}>
    //dodajemy atrybut ref aby dostac sie do pola tekstowego i wyciagnac input.value
      <input type="text" className="AddPlayer__input" ref={(node) => input = node}/>
      <input type="submit" className="AddPlayer__submit" value="Add" />
    </form>
  )
};

export default AddPlayer;

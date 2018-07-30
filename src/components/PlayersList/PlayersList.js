//{}->players(tablica z imiona i punkty graczy)
import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';
//komponent, który w liście ul renderuje informacje o graczach, mapując je na komponenty Player
const PlayersList = (props) => (
   <ul className="PlayersList">
       {props.players.map((player, i) => (
           <Player
               key={i}
               name={player.name}
               score={player.score}
               //Za każdym razem, gdy w komponencie Player naciśniemy guzik +/-
               // wywołamy callback onPlayerScoreChange. W następstwie, w komponencie
               // PlayersList, przekażemy informację o liczbie punktów (points) i
               // indeksie gracza (i) do komponentu wyżej (App) za pomocą onScoreUpdate.
               //Ten callback ma dwa parametry: indeks gracza oraz zmianę punktową.
               //Dzięki takiemu zabiegowi oba przypadki (dodanie i odjęcie punktów)
               //załatwiamy jednocześnie
               onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
               onPlayerRemove={() => props.onPlayerRemove(i)}
           />)
       )}
   </ul>
);

export default PlayersList;

import './SelectPlayerNumberPage.css';
import { useState } from 'react';
// import { createPlayers } from '../api';
import { createPlayers } from '../__mocks__/api';
import Button from '../components/Button';
import GameText from '../components/GameText';

export default function SelectPlayerNumberPage({
  gameId,
  handleStatus,
  handleIsStarted
}) {
  const [playerNumber, setPlayerNumber] = useState(2);
  const [disable, setDisable] = useState(false);

  const handlePlayerNumber = e => {
    setPlayerNumber(prev => (
      {
        '+': prev < 4 ? prev + 1 : prev,
        '-': prev > 2 ? prev - 1 : prev
      }[e.target.innerText]
    ));
  };

  const handleClick = async () => {
    setDisable(true);
    const status = await createPlayers(gameId, playerNumber);
    handleStatus(status);
    handleIsStarted(true);
  };

  return (
    <>
      <GameText>Select player number</GameText>
      <div className="select-player">
        <Button
          onClick={handlePlayerNumber}
          disabled={disable}
          bigButton>
          -
        </Button>
        <GameText>{playerNumber}</GameText>
        <Button
          onClick={handlePlayerNumber}
          disabled={disable}
          bigButton>
          +
        </Button>
      </div>
      <Button onClick={handleClick} disabled={disable}>Start</Button>
    </>
  );
}

// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import StartPage from './page/StartPage';
import SelectPlayerNumberPage from './page/SelectPlayerNumberPage';
import GamePage from './page/GamePage';
import EndPage from './page/EndPage';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [gameId, setGameId] = useState(null);
  const [status, setStatus] = useState(null);

  return (
    <>
      { !gameId && <StartPage handleGameId={setGameId} /> }
      {
        gameId && !isStarted && !isEnded &&
        <SelectPlayerNumberPage
          gameId={gameId}
          handleStatus={setStatus}
          handleIsStarted={setIsStarted} />
      }
      {
        isStarted &&
        <GamePage
          status={status}
          handleIsStarted={setIsStarted}
          handleIsEnded={setIsEnded}
          handleStatus={setStatus} />
      }
      {
        isEnded &&
        <EndPage
          status={status}
          handleIsEnded={setIsEnded}
          handleGameId={setGameId}
          handleStatus={setStatus} />
      }
    </>
  );
}

export default App;

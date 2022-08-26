// import { getStart } from '../api';
import { getStart } from '../__mocks__/api';
import Button from '../components/Button';
import GameText from '../components/GameText';

export default function StartPage({handleGameId}) {
  const handleClick = async (e) => {
    e.target.disabled = true;
    const gameId = await getStart();
    handleGameId(gameId);
  };

  return (
    <>
      <GameText>BOARD GAME</GameText>
      <Button onClick={handleClick}>Start Game</Button>
    </>
  );
}

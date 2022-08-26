// import { nextRound } from '../api';
import { nextRound } from '../__mocks__/api';
import Board from '../components/Board/Board';
import Player from '../components/Player';
import GameStatus from '../components/GameStatus';

export default function GamePage({
  status,
  handleIsStarted,
  handleIsEnded,
  handleStatus
}) {
  const {fields, players, nextPlayer, id} = status;

  const lastPlayer = players.slice(players.findIndex(p => p.name === nextPlayer.name)-1)[0];

  const handleRoll = async () => {
    const dice = Math.floor(Math.random() * 6 + 1);
    const newStatus = await nextRound(id, nextPlayer.name, dice);
    handleStatus(newStatus);

    if (newStatus.winner) {
      handleIsStarted(false);
      handleIsEnded(true);
    }
  };

  return (
    <>
      {
        lastPlayer.lastGamingSituation &&
        <GameStatus>{lastPlayer.lastGamingSituation}</GameStatus>
      }
      <Player players={players} nextPlayer={nextPlayer} handleRoll={handleRoll} />
      <Board fields={fields} players={players} />
    </>
  );
}

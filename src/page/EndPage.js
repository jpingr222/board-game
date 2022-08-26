import Button from '../components/Button';
import GameText from '../components/GameText';

export default function EndPage({
  status,
  handleIsEnded,
  handleGameId,
  handleStatus
}) {
  const handleClick = () => {
    handleIsEnded(false);
    handleStatus(null);
    handleGameId(null);
  };

  return (
    <>
      <GameText>Winner: {status.winner.name}</GameText>
      <Button onClick={handleClick}>Restart</Button>
    </>
  );
}

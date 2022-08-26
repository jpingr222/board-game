import './Player.css';
import Button from './Button';

export default function Player({players, nextPlayer, handleRoll}) {
  const convertedPlayers = [
    ...players
  ].sort(
    (a, b) => a.name.slice(-1) - b.name.slice(-1)
  ).map(({name}) => {
    return {
      name,
      className: [
        'player',
        `player-${name.slice(-1)}`,
        name === nextPlayer.name ? 'active' : ''
      ].join(' ').trim()
    };
  });

  return (
    <div className="player-field">
      {convertedPlayers.map(({name, className}) => {
        return (
          <div className={className} key={name} data-testid="player">
            <span>{name}</span>
            {name === nextPlayer.name && <Button onClick={handleRoll}>Roll</Button>}
          </div>
        );
      })}
    </div>
  );
}

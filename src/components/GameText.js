import './GameText.css';

export default function GameText({children}) {
  return <div className='game-text' data-testid="game-text">{children}</div>;
};

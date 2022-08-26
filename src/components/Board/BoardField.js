import './BoardField.css';
import Piece from './Piece';

export default function BoardField({id, fieldType, players}) {
  return (
    <div className={`board-field board-field-${fieldType.toLowerCase()}`} data-testid="board-field">
      <p>{id}</p>
      {players && players.map(p => <Piece name={p} key={p} />)}
    </div>
  );
};

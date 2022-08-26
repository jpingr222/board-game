import './Piece.css';

export default function Piece({name}) {
  return <div className={`piece piece-${name.slice(-1)}`} data-testid="piece"></div>;
};

import './Board.css';
import BoardField from './BoardField';

export default function Board({fields, players}) {
  // Add start and end fields to sorted fields array
  const gameFields = [
    { fieldType: 'NORMAL', position: 'Start' },
    ...[...fields].sort((a, b) => a.position - b.position),
    { fieldType: 'NORMAL', position: 'Win' }
  ];

  // Add players to their current position in fields array
  [...players].sort((a, b) => a.name.slice(-1) - b.name.slice(-1)).forEach(p => {
    gameFields[p.field] = {
      ...gameFields[p.field],
      players: [
        ...gameFields[p.field]['players'] || [],
        p.name
      ]
    };
  });

  return (
    <div className="board">
      {gameFields.map(({fieldType, position, players}) => {
        return (
          <BoardField
            id={position}
            fieldType={fieldType}
            key={position}
            players={players} />
        );
      })}
    </div>
  );
};

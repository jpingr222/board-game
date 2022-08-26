import { render, screen, within } from '@testing-library/react'
import Board from './Board';

const FIELDS = [
  { "fieldType": "NORMAL", "position": 1 },
  { "fieldType": "NORMAL", "position": 2 },
  { "fieldType": "NORMAL", "position": 3 },
  { "fieldType": "NORMAL", "position": 4 },
  { "fieldType": "TRAP", "position": 5 },
  { "fieldType": "NORMAL", "position": 6 },
  { "fieldType": "TRAP", "position": 7 },
  { "fieldType": "NORMAL", "position": 8 },
  { "fieldType": "BONUS", "position": 9 },
  { "fieldType": "NORMAL", "position": 10 },
  { "fieldType": "TRAP", "position": 11 },
  { "fieldType": "NORMAL", "position": 12 },
  { "fieldType": "BONUS", "position": 13 },
  { "fieldType": "NORMAL", "position": 14 },
  { "fieldType": "TRAP", "position": 15 },
  { "fieldType": "NORMAL", "position": 16 },
  { "fieldType": "NORMAL", "position": 17 },
  { "fieldType": "BONUS", "position": 18 },
  { "fieldType": "BONUS", "position": 19 },
  { "fieldType": "NORMAL", "position": 20 },
  { "fieldType": "NORMAL", "position": 21 },
  { "fieldType": "TRAP", "position": 22 },
  { "fieldType": "BONUS", "position": 23 },
  { "fieldType": "NORMAL", "position": 24 },
  { "fieldType": "NORMAL", "position": 25 },
  { "fieldType": "NORMAL", "position": 26 },
  { "fieldType": "NORMAL", "position": 27 },
  { "fieldType": "NORMAL", "position": 28 },
  { "fieldType": "NORMAL", "position": 29 },
  { "fieldType": "NORMAL", "position": 30 }
];
const PLAYERS = [
  {
    "name": "Player 3",
    "field": 0,
    "previousField": null,
    "joker": false,
    "skipNextRound": false,
    "lastGamingSituation": null
  },
  {
    "name": "Player 1",
    "field": 0,
    "previousField": null,
    "joker": false,
    "skipNextRound": false,
    "lastGamingSituation": null
  },
  {
    "name": "Player 2",
    "field": 0,
    "previousField": null,
    "joker": false,
    "skipNextRound": false,
    "lastGamingSituation": null
  }
];

afterEach(() => {
  PLAYERS.map(p => { p.field = 0 });
});

describe('Board test', () => {
  it('should render the correct board, start and end fields', () => {
    render(<Board fields={FIELDS} players={PLAYERS} />);
  
    const fields = screen.getAllByTestId('board-field');
    const startField = screen.queryByText('Start');
    const winField = screen.queryByText('Win');
  
    expect(fields.length).toBe(32);
    expect(startField).not.toBeNull();
    expect(winField).not.toBeNull();
  });
  
  it('should have correct number of pieces', () => {
    const {rerender} = render(<Board fields={FIELDS} players={PLAYERS} />);
    let pieces = screen.getAllByTestId('piece');
    expect(pieces.length).toBe(3);
  
    PLAYERS[0]['field'] = 5;
    rerender(<Board fields={FIELDS} players={PLAYERS} />);
    pieces = screen.getAllByTestId('piece');
    expect(pieces.length).toBe(3);
  
    PLAYERS[1]['field'] = 2;
    rerender(<Board fields={FIELDS} players={PLAYERS} />);
    pieces = screen.getAllByTestId('piece');
    expect(pieces.length).toBe(3);
  
    PLAYERS[2]['field'] = 1;
    rerender(<Board fields={FIELDS} players={PLAYERS} />);
    pieces = screen.getAllByTestId('piece');
    expect(pieces.length).toBe(3);
  });
  
  it('should set the correct position of pieces', () => {
    const {rerender} = render(<Board fields={FIELDS} players={PLAYERS} />);
    let fields = screen.getAllByTestId('board-field');
    let pieces = within(fields[0]).getAllByTestId('piece');
    expect(pieces.length).toBe(3);

    PLAYERS[0]['field'] = 5;
    rerender(<Board fields={FIELDS} players={PLAYERS} />);
    fields = screen.getAllByTestId('board-field');
    pieces = within(fields[5]).getByTestId('piece');
    expect(pieces).toHaveClass('piece-3');

    PLAYERS[1]['field'] = 2;
    rerender(<Board fields={FIELDS} players={PLAYERS} />);
    fields = screen.getAllByTestId('board-field');
    pieces = within(fields[2]).getByTestId('piece');
    expect(pieces).toHaveClass('piece-1');

    PLAYERS[2]['field'] = 1;
    rerender(<Board fields={FIELDS} players={PLAYERS} />);
    fields = screen.getAllByTestId('board-field');
    pieces = within(fields[1]).getByTestId('piece');
    expect(pieces).toHaveClass('piece-2');
  });
});

import { render, screen } from '@testing-library/react';
import BoardField from './BoardField';

describe('BoardFIeld test', () => {
  it('should have visable field id', () => {
    const players = ['Player 1', 'Player 2', 'Player 3'];
    render(<BoardField id="1" fieldType="NORMAL" players={players} />);

    const p = screen.queryByText('1');

    expect(p).not.toBeNull();
    expect(p).toBeVisible();
  });

  it('should have the class of the field type', () => {
    const players = ['Player 1', 'Player 2', 'Player 3'];
    const {rerender} = render(<BoardField id="1" fieldType="NORMAL" players={players} />);

    const boardField = screen.getByTestId('board-field');
    expect(boardField).toHaveClass('board-field-normal');

    rerender(<BoardField id="1" fieldType="TRAP" players={players} />);
    expect(boardField).toHaveClass('board-field-trap');
  });

  it('should render the pieces of players on the field', () => {
    const players = ['Player 1', 'Player 2', 'Player 3'];

    // 3 players
    const {rerender} = render(<BoardField id="1" fieldType="NORMAL" players={players} />);
    const pieces = screen.getAllByTestId('piece');
    expect(pieces.length).toBe(3);

    // 2 players
    players.pop();
    rerender(<BoardField id="1" fieldType="NORMAL" players={players} />);
    const pieces2 = screen.getAllByTestId('piece');
    expect(pieces2.length).toBe(2);

    // 4 players
    players.push('Player 3', 'Player 4');
    rerender(<BoardField id="1" fieldType="NORMAL" players={players} />);
    const pieces4 = screen.getAllByTestId('piece');
    expect(pieces4.length).toBe(4);
  });  
});

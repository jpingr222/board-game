import { render, screen } from '@testing-library/react';
import Piece from './Piece';

describe('Piece test', () => {
  it('should have correct class', () => {
    render(<Piece name="Player 1" />);
    render(<Piece name="Player 2" />);
    render(<Piece name="Player 3" />);
    render(<Piece name="Player 4" />);

    const piece = screen.getAllByTestId('piece');

    expect(piece[0]).toHaveClass('piece-1');
    expect(piece[1]).toHaveClass('piece-2');
    expect(piece[2]).toHaveClass('piece-3');
    expect(piece[3]).toHaveClass('piece-4');
  });
});

import { render, screen } from '@testing-library/react';
import GameStatus from './GameStatus';

describe('GameStatus test', () => {
  it('should render correct text', () => {
    render(<GameStatus>The player 'Player 3' moved from field number 0 to field number 2.</GameStatus>);

    const gameStatus = screen.getByText(/player/);

    expect(gameStatus).toHaveTextContent('The player \'Player 3\' moved from field number 0 to field number 2.');
  });
});

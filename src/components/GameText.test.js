import { render, screen } from '@testing-library/react';
import GameText from './GameText';

describe('GameText test', () => {
  it('should render correct text', () => {
    const text = 'Board Game';
    render(<GameText>{text}</GameText>);

    const gameText = screen.getByTestId('game-text');

    expect(gameText).toHaveTextContent('Board Game');
  });
});

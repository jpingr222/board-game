import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Player from './Player';

const ALL_PLAYERS = [{name: 'Player 3'}, {name: 'Player 1'}, {name: 'Player 2'}];
const NEXT_PLAYER = { name: 'Player 3' };
const mockRoll = jest.fn();

afterEach(() => {
  mockRoll.mockClear();
});

describe('Player test', () => {
  describe('players', () => {
    it('should have correct number of players', () => {
      render(<Player players={ALL_PLAYERS} nextPlayer={NEXT_PLAYER} handleRoll={mockRoll} />);

      const players = screen.getAllByTestId('player');

      expect(players.length).toBe(3);
    });

    it('should render players in correct order', () => {
      render(<Player players={ALL_PLAYERS} nextPlayer={NEXT_PLAYER} handleRoll={mockRoll} />);

      const players = screen.getAllByTestId('player');

      expect(players[0]).toHaveTextContent('Player 1');
      expect(players[1]).toHaveTextContent('Player 2');
      expect(players[2]).toHaveTextContent('Player 3');
    });

    it('should have class corresponding to player name', () => {
      render(<Player players={ALL_PLAYERS} nextPlayer={NEXT_PLAYER} handleRoll={mockRoll} />);

      const players = screen.getAllByTestId('player');

      expect(players[0]).toHaveClass('player-1');
      expect(players[1]).toHaveClass('player-2');
      expect(players[2]).toHaveClass('player-3');
    });
  });

  describe('next player', () => {
    it('should have active class on next player', () => {
      render(<Player players={ALL_PLAYERS} nextPlayer={NEXT_PLAYER} handleRoll={mockRoll} />);

      const players = screen.getAllByTestId('player');

      expect(players[0]).not.toHaveClass('active');
      expect(players[1]).not.toHaveClass('active');
      expect(players[2]).toHaveClass('active');
    });
  });

  describe('roll button', () => {
    it('should have a roll button in next player', () => {
      render(<Player players={ALL_PLAYERS} nextPlayer={NEXT_PLAYER} handleRoll={mockRoll} />);

      const players = screen.getAllByTestId('player');
      const player1Button = within(players[0]).queryByRole('button');
      const player2Button = within(players[1]).queryByRole('button');
      const player3Button = within(players[2]).queryByRole('button');

      expect(player1Button).toBeNull();
      expect(player2Button).toBeNull();
      expect(player3Button).not.toBeNull();
    });

    it('should call onclick function when roll button is clicked', () => {
      render(<Player players={ALL_PLAYERS} nextPlayer={NEXT_PLAYER} handleRoll={mockRoll} />);

      const button = screen.getByRole('button');
      userEvent.click(button);

      expect(mockRoll).toBeCalled();
    });
  });
});

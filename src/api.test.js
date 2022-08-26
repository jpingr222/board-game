import { getStart, createPlayers, nextRound } from "./api";

// Setup api mock
const GAME_ID = 'a1bf406e-fd5b-4674-89ac-2f89d1425b01';
const PLAYER_NUM = 2;
const DICE_NUM = 5;
const NEXT_PLAYER = 'Player 1';
const GAME_STATUS = {
  players: [
    { name: 'Player 1' },
    { name: 'Player 2' }
  ],
  nextPlayer: { name: 'Player 1' },
  id: 'a1bf406e-fd5b-4674-89ac-2f89d1425b01'
};
const NEXT_STATUS = {
  players: [
    { name: 'Player 1', "field": 5 },
    { name: 'Player 2', "field": 0 }
  ],
  nextPlayer: { name: 'Player 2' },
  id: 'a1bf406e-fd5b-4674-89ac-2f89d1425b01'
};

const mockFetch = jest.spyOn(global, 'fetch');

afterEach(() => {
  mockFetch.mockReset();
});

describe('getStart', () => {
  it('should get the game id', async () => {
    mockFetch.mockResolvedValue({
      text: () => Promise.resolve(GAME_ID),
    });

    const received = await getStart();

    expect(received).toBe(GAME_ID);
  });
});

describe('createPlayers', () => {
  it('should get the initial game status', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(GAME_STATUS),
    });

    const received = await createPlayers(GAME_ID, PLAYER_NUM);

    expect(received.players.length).toBe(PLAYER_NUM);
    expect(received).toEqual(GAME_STATUS);
  });
});

describe('nextRound', () => {
  it('should get the next game status', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(NEXT_STATUS),
    });

    const received = await nextRound(GAME_ID, NEXT_PLAYER, DICE_NUM);

    expect(
      received.players.find(player => player.name === 'Player 1').field
    ).toBe(DICE_NUM);
    expect(received.nextPlayer.name).toBe('Player 2');
    expect(received).toEqual(NEXT_STATUS);
  });
});

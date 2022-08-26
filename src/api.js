const api = (resource, method, body) => {
  return fetch(`http://localhost:3005${resource}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
};

export const getStart = async () => {
  const response = await api('/start', 'GET');
  return response.text();
};

export const createPlayers = async (id, numberOfPlayers) => {
  const response = await api('/players', 'POST', { id, numberOfPlayers });
  return response.json();
};

export const nextRound = async (id, player, numberOfDice) => {
  const response = await api('/next', 'POST', { id, player, numberOfDice });
  return response.json();
};

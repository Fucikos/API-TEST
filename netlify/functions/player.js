const buildResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

exports.handler = async () => {
  const apiKey = 'iXfTBveBJjtFSPzN';
  const userId = '3859772';

  const endpoint = `https://api.torn.com/user/${userId}?selections=profile&key=${apiKey}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      return buildResponse(response.status, {
        error: `API responded with status ${response.status}.`,
      });
    }
    const data = await response.json();
    if (data.error) {
      return buildResponse(502, { error: data.error.error });
    }

    const profile = {
      name: data.name,
      level: data.level,
      status: data.status?.state ?? 'Unknown',
      faction: data.faction?.faction_name ?? 'No faction',
    };

    return buildResponse(200, profile);
  } catch (error) {
    return buildResponse(500, {
      error: `Failed to load data: ${error.message}`,
    });
  }
};

const statusEl = document.getElementById('status');
const nameEl = document.getElementById('player-name');
const onlineEl = document.getElementById('player-status');
const factionEl = document.getElementById('player-faction');
const levelEl = document.getElementById('player-level');
const refreshBtn = document.getElementById('refresh');

const setStatus = (message, type = 'info') => {
  statusEl.textContent = message;
  statusEl.dataset.type = type;
};

const renderProfile = (profile) => {
  nameEl.textContent = profile.name ?? '—';
  onlineEl.textContent = profile.status ?? '—';
  factionEl.textContent = profile.faction ?? '—';
  levelEl.textContent = profile.level ?? '—';
};

const fetchProfile = async () => {
  setStatus('Loading data…');
  try {
    const response = await fetch('/.netlify/functions/player');
    if (!response.ok) {
      throw new Error(`Server error (${response.status})`);
    }
    const data = await response.json();
    renderProfile(data);
    setStatus('Data loaded successfully.', 'success');
  } catch (error) {
    setStatus(`Failed to load data: ${error.message}`, 'error');
  }
};

refreshBtn.addEventListener('click', fetchProfile);

fetchProfile();

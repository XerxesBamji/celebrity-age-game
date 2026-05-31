import { useState } from 'react';

const MAX_PLAYERS = 6;
const MIN_PLAYERS = 2;

export default function SetupScreen({ onStart }) {
  const [players, setPlayers] = useState(['', '']);

  const updatePlayer = (i, val) => {
    setPlayers((prev) => prev.map((p, idx) => (idx === i ? val : p)));
  };

  const addPlayer = () => {
    if (players.length < MAX_PLAYERS) setPlayers((p) => [...p, '']);
  };

  const removePlayer = (i) => {
    if (players.length > MIN_PLAYERS) setPlayers((p) => p.filter((_, idx) => idx !== i));
  };

  const canStart = players.filter((p) => p.trim()).length >= MIN_PLAYERS;

  const handleStart = () => {
    const names = players.map((p, i) => p.trim() || `Player ${i + 1}`);
    onStart(names);
  };

  return (
    <div
      id="setup-screen"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'radial-gradient(ellipse at 20% 50%, oklch(28% 0.14 280 / 0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, oklch(28% 0.1 320 / 0.3) 0%, transparent 50%), oklch(12% 0.02 280)',
      }}
    >
      {/* Hero */}
      <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '12px' }}>🎬</div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            fontWeight: 900,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          <span className="text-gradient">Celebrity</span>
          <br />
          <span style={{ color: 'white' }}>Age Game</span>
        </h1>
        <p style={{ color: 'oklch(70% 0.05 280)', marginTop: '12px', fontSize: '1.05rem' }}>
          Guess the combined ages. Build your lineup. Win the round. 🏆
        </p>
      </div>

      {/* Player setup card */}
      <div
        className="glass animate-fadeInUp"
        style={{
          width: '100%',
          maxWidth: '460px',
          borderRadius: '20px',
          padding: '32px',
          animationDelay: '0.1s',
          animationFillMode: 'both',
        }}
      >
        <h2
          style={{
            margin: '0 0 20px',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'oklch(80% 0.05 280)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Players ({players.length}/{MAX_PLAYERS})
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {players.map((name, i) => (
            <div
              key={i}
              style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
              className="animate-fadeIn"
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  flexShrink: 0,
                  background: `hsl(${(i * 60) % 360}, 70%, 55%)`,
                }}
              >
                {i + 1}
              </div>
              <input
                id={`player-input-${i + 1}`}
                className="input-field"
                type="text"
                placeholder={`Player ${i + 1} name`}
                value={name}
                onChange={(e) => updatePlayer(i, e.target.value)}
                maxLength={20}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && i === players.length - 1 && canStart) handleStart();
                }}
              />
              {players.length > MIN_PLAYERS && (
                <button
                  id={`remove-player-${i + 1}`}
                  onClick={() => removePlayer(i)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'oklch(55% 0.05 280)',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    padding: '4px',
                    lineHeight: 1,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'oklch(65% 0.22 25)')}
                  onMouseLeave={(e) => (e.target.style.color = 'oklch(55% 0.05 280)')}
                  aria-label={`Remove player ${i + 1}`}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        {players.length < MAX_PLAYERS && (
          <button
            id="add-player-btn"
            className="btn-ghost"
            onClick={addPlayer}
            style={{ width: '100%', marginTop: '12px', padding: '10px' }}
          >
            + Add Player
          </button>
        )}

        <button
          id="start-game-btn"
          className="btn-primary animate-pulse-glow"
          onClick={handleStart}
          disabled={!canStart}
          style={{ width: '100%', marginTop: '20px', fontSize: '1.1rem', padding: '16px' }}
        >
          Start Game 🚀
        </button>
      </div>

      <p
        style={{
          marginTop: '20px',
          color: 'oklch(45% 0.03 280)',
          fontSize: '0.85rem',
          textAlign: 'center',
        }}
      >
        2–6 players · Pass the screen around · Ages pulled from Wikipedia
      </p>
    </div>
  );
}

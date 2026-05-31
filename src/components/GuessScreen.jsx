import { useState } from 'react';
import CelebrityCard from './CelebrityCard';

/**
 * Phase 2: Show all 4 celebrities (names + photos, ages hidden).
 * Each player enters their guess for the combined total age.
 * Players go one at a time, passing the screen around.
 */
export default function GuessScreen({ players, celebrities, onAllGuessed }) {
  // currentPlayerIdx: whose turn it is to guess
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [guesses, setGuesses] = useState({});
  const [inputVal, setInputVal] = useState('');
  const [submitted, setSubmitted] = useState(false); // animation state

  const allLoaded = celebrities.every((c) => !c.loading);
  const currentPlayer = players[currentPlayerIdx];

  const handleSubmitGuess = () => {
    const num = parseInt(inputVal, 10);
    if (!num || num < 1) return;

    const newGuesses = { ...guesses, [currentPlayerIdx]: num };
    setGuesses(newGuesses);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setInputVal('');

      if (currentPlayerIdx < players.length - 1) {
        setCurrentPlayerIdx((i) => i + 1);
      } else {
        // All players have guessed
        const guessArray = players.map((_, i) => newGuesses[i]);
        onAllGuessed(guessArray);
      }
    }, 700);
  };

  return (
    <div
      id="guess-screen"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px',
        background:
          'radial-gradient(ellipse at 50% 0%, oklch(28% 0.12 300 / 0.4) 0%, transparent 60%), oklch(12% 0.02 280)',
      }}
    >
      {/* Header */}
      <div style={{ width: '100%', maxWidth: '900px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                margin: 0,
                fontWeight: 800,
              }}
            >
              Meet the Celebrities
            </h1>
            <p style={{ margin: '4px 0 0', color: 'oklch(65% 0.05 280)', fontSize: '0.95rem' }}>
              Study them carefully — how old do you think they all are combined?
            </p>
          </div>
          {/* Player progress pills */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {players.map((name, i) => (
              <div
                key={i}
                style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background:
                    i < currentPlayerIdx
                      ? 'oklch(70% 0.22 145 / 0.3)'
                      : i === currentPlayerIdx
                      ? 'oklch(61% 0.24 280 / 0.35)'
                      : 'oklch(30% 0.03 280)',
                  border:
                    i === currentPlayerIdx
                      ? '1px solid oklch(61% 0.24 280 / 0.5)'
                      : '1px solid transparent',
                  color:
                    i < currentPlayerIdx
                      ? 'oklch(70% 0.22 145)'
                      : i === currentPlayerIdx
                      ? 'white'
                      : 'oklch(50% 0.03 280)',
                  transition: 'all 0.3s ease',
                }}
              >
                {i < currentPlayerIdx ? '✓ ' : ''}
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Celebrity cards grid */}
      {!allLoaded ? (
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {celebrities.map((_, i) => (
            <div
              key={i}
              className="animate-shimmer"
              style={{ borderRadius: '16px', height: '280px' }}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {celebrities.map((celeb, i) => (
            <div
              key={celeb.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              <CelebrityCard celeb={celeb} hideAge />
            </div>
          ))}
        </div>
      )}

      {/* Guess input */}
      <div
        className="glass"
        style={{
          width: '100%',
          maxWidth: '460px',
          borderRadius: '20px',
          padding: '28px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 700,
            margin: '0 auto 12px',
            background: `hsl(${(currentPlayerIdx * 60) % 360}, 70%, 55%)`,
          }}
        >
          {currentPlayerIdx + 1}
        </div>
        <h2 style={{ margin: '0 0 6px', fontSize: '1.3rem', fontWeight: 700 }}>
          {currentPlayer}, what's your guess?
        </h2>
        <p style={{ color: 'oklch(60% 0.04 280)', fontSize: '0.9rem', margin: '0 0 20px' }}>
          Combined age of all 4 celebrities
        </p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            id="guess-input"
            className="input-field"
            type="number"
            min="1"
            max="500"
            placeholder="e.g. 185"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmitGuess()}
            style={{ fontSize: '1.2rem', textAlign: 'center', fontWeight: 600 }}
            autoFocus
          />
          <button
            id="submit-guess-btn"
            className="btn-primary"
            onClick={handleSubmitGuess}
            disabled={!inputVal || parseInt(inputVal) < 1 || submitted}
            style={{ whiteSpace: 'nowrap', minWidth: '100px' }}
          >
            {submitted ? '✓' : 'Lock In'}
          </button>
        </div>

        <p style={{ marginTop: '12px', color: 'oklch(45% 0.03 280)', fontSize: '0.8rem' }}>
          {currentPlayerIdx + 1} of {players.length} players
        </p>
      </div>
    </div>
  );
}

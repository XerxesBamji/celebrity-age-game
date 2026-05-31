import { useState, useEffect } from 'react';
import { buildResults, findWinner } from '../utils/gameLogic';
import CelebrityCard from './CelebrityCard';
import Confetti from './Confetti';

/**
 * Phase 4: Reveal screen.
 * Shows each celebrity's real age, each player's lineup + sum, and the winner.
 */
export default function RevealScreen({ players, celebrities, guesses, lineups, onPlayAgain }) {
  const results = buildResults(players, guesses, lineups, celebrities);
  const winnerIdx = findWinner(results);

  const [revealStep, setRevealStep] = useState(0);
  // Steps: 0 = reveal celeb ages, 1 = show player lineups, 2 = winner

  const allCelebAges = celebrities.reduce((acc, c) => acc + (c.age ?? 0), 0);

  return (
    <div
      id="reveal-screen"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 24px 48px',
        background:
          'radial-gradient(ellipse at 50% 0%, oklch(28% 0.16 85 / 0.25) 0%, transparent 60%), oklch(12% 0.02 280)',
      }}
    >
      {revealStep >= 2 && <Confetti />}

      {/* Page title */}
      <div style={{ textAlign: 'center', marginBottom: '32px', marginTop: '8px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 900,
            margin: 0,
          }}
        >
          {revealStep < 2 ? (
            <>The Big <span className="text-gradient">Reveal</span> 🎭</>
          ) : (
            <>
              🏆 <span className="text-gradient">{players[winnerIdx]}</span> Wins!
            </>
          )}
        </h1>
        {revealStep === 0 && (
          <p style={{ color: 'oklch(60% 0.04 280)', marginTop: '8px' }}>
            Combined age of all 4: <strong style={{ color: 'oklch(84% 0.18 85)', fontSize: '1.3rem' }}>{allCelebAges}</strong>
          </p>
        )}
        {revealStep === 2 && (
          <p style={{ color: 'oklch(60% 0.04 280)', marginTop: '8px' }}>
            Closest to the actual target age of <strong style={{ color: 'oklch(84% 0.18 85)' }}>{allCelebAges}</strong>!
          </p>
        )}
      </div>

      {/* Step 1: Celebrity ages */}
      {revealStep >= 0 && (
        <section style={{ width: '100%', maxWidth: '900px', marginBottom: '32px' }}>
          <SectionLabel icon="🎬" label="Celebrity Ages" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
              gap: '14px',
            }}
          >
            {celebrities.map((celeb, i) => (
              <div
                key={celeb.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${i * 0.12}s`, animationFillMode: 'both' }}
              >
                <CelebrityCard celeb={celeb} hideAge={false} />
              </div>
            ))}
          </div>

          {revealStep === 0 && (
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button
                id="reveal-lineups-btn"
                className="btn-primary"
                onClick={() => setRevealStep(1)}
                style={{ fontSize: '1.05rem', padding: '14px 36px' }}
              >
                See Everyone's Lineup →
              </button>
            </div>
          )}
        </section>
      )}

      {/* Step 2: Player lineups */}
      {revealStep >= 1 && (
        <section
          className="animate-fadeInUp"
          style={{ width: '100%', maxWidth: '900px', marginBottom: '32px' }}
        >
          <SectionLabel icon="📋" label="Player Lineups" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {results.map((result, i) => (
              <PlayerResult
                key={i}
                result={result}
                playerIdx={i}
                isWinner={i === winnerIdx && revealStep >= 2}
                celebrities={celebrities}
                delay={i * 0.1}
              />
            ))}
          </div>

          {revealStep === 1 && (
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button
                id="reveal-winner-btn"
                className="btn-primary animate-pulse-glow"
                onClick={() => setRevealStep(2)}
                style={{ fontSize: '1.1rem', padding: '16px 40px' }}
              >
                🏆 Reveal the Winner!
              </button>
            </div>
          )}
        </section>
      )}

      {/* Step 3: Winner podium + play again */}
      {revealStep >= 2 && (
        <section
          className="animate-scaleIn"
          style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}
        >
          <div
            className="glass"
            style={{
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid oklch(84% 0.18 85 / 0.35)',
              boxShadow: '0 0 60px oklch(84% 0.18 85 / 0.15)',
              marginBottom: '20px',
            }}
          >
            <div style={{ fontSize: '3.5rem', marginBottom: '8px' }}>🏆</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 900,
                margin: '0 0 4px',
              }}
              className="text-gradient"
            >
              {players[winnerIdx]}
            </h2>
            <p style={{ color: 'oklch(60% 0.04 280)', margin: '0 0 16px' }}>
              Target was <strong style={{ color: 'white' }}>{allCelebAges}</strong> · Lineup total <strong style={{ color: 'white' }}>{results[winnerIdx].lineupSum}</strong>
            </p>
            <div
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'oklch(70% 0.22 145 / 0.2)',
                border: '1px solid oklch(70% 0.22 145 / 0.4)',
                color: 'oklch(70% 0.22 145)',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              Only {results[winnerIdx].score} year{results[winnerIdx].score !== 1 ? 's' : ''} off!
            </div>
          </div>

          {/* Leaderboard */}
          <div className="glass" style={{ borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 14px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'oklch(55% 0.04 280)', fontWeight: 600 }}>
              Final Standings
            </h3>
            {[...results]
              .map((r, i) => ({ ...r, originalIdx: i }))
              .sort((a, b) => a.score - b.score)
              .map((r, rank) => (
                <div
                  key={r.originalIdx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 0',
                    borderBottom: rank < results.length - 1 ? '1px solid oklch(100% 0 0 / 0.06)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1rem' }}>
                      {rank === 0 ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : `${rank + 1}.`}
                    </span>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: `hsl(${(r.originalIdx * 60) % 360}, 70%, 55%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      }}
                    >
                      {r.originalIdx + 1}
                    </div>
                    <span style={{ fontWeight: 600 }}>{r.playerName}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ color: 'oklch(65% 0.04 280)', fontSize: '0.85rem' }}>
                      {r.score} yr{r.score !== 1 ? 's' : ''} off
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <button
            id="play-again-btn"
            className="btn-primary"
            onClick={onPlayAgain}
            style={{ width: '100%', fontSize: '1.05rem', padding: '16px' }}
          >
            Play Again 🎬
          </button>
        </section>
      )}
    </div>
  );
}

function SectionLabel({ icon, label }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '14px',
      }}
    >
      <span style={{ fontSize: '1.1rem' }}>{icon}</span>
      <h2
        style={{
          margin: 0,
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'oklch(55% 0.04 280)',
          fontWeight: 700,
        }}
      >
        {label}
      </h2>
      <div style={{ flex: 1, height: '1px', background: 'oklch(100% 0 0 / 0.08)' }} />
    </div>
  );
}

function PlayerResult({ result, playerIdx, isWinner, delay }) {
  return (
    <div
      className="glass animate-fadeInUp"
      style={{
        borderRadius: '16px',
        padding: '20px',
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
        border: isWinner ? '1px solid oklch(84% 0.18 85 / 0.5)' : undefined,
        boxShadow: isWinner ? '0 0 40px oklch(84% 0.18 85 / 0.15)' : undefined,
        transition: 'all 0.5s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        {/* Player name + badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isWinner && <span style={{ fontSize: '1.3rem' }}>🏆</span>}
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: `hsl(${(playerIdx * 60) % 360}, 70%, 55%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.85rem',
            }}
          >
            {playerIdx + 1}
          </div>
          <span style={{ fontWeight: 700, fontSize: '1rem' }}>{result.playerName}</span>
        </div>

        {/* Score summary */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Stat label="Estimate" value={result.guess} />
          <Stat label="Target" value={result.targetSum} />
          <Arrow />
          <Stat label="Lineup" value={result.lineupSum} highlight />
          <DiffBadge diff={result.score} />
        </div>
      </div>

      {/* Lineup celebrities */}
      {result.lineupCelebs.length > 0 && (
        <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {result.lineupCelebs.map((celeb, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'oklch(22% 0.03 280 / 0.7)',
                borderRadius: '10px',
                padding: '6px 12px',
              }}
            >
              {celeb?.photo ? (
                <img
                  src={celeb.photo}
                  alt={celeb.name}
                  style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'oklch(35% 0.05 280)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                  }}
                >
                  🎬
                </div>
              )}
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{celeb?.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'oklch(84% 0.18 85)' }}>
                  age {celeb?.age ?? '?'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, highlight }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          color: highlight ? 'oklch(84% 0.18 85)' : 'white',
          fontFamily: 'var(--font-display)',
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: '0.7rem', color: 'oklch(50% 0.03 280)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        {label}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div style={{ color: 'oklch(40% 0.03 280)', fontSize: '1.2rem', marginTop: '-8px' }}>→</div>
  );
}

function DiffBadge({ diff }) {
  const great = diff <= 5;
  const ok = diff <= 15;
  return (
    <div
      style={{
        padding: '4px 10px',
        borderRadius: '999px',
        fontSize: '0.8rem',
        fontWeight: 700,
        background: great
          ? 'oklch(70% 0.22 145 / 0.2)'
          : ok
          ? 'oklch(78% 0.2 85 / 0.2)'
          : 'oklch(65% 0.22 25 / 0.2)',
        color: great
          ? 'oklch(70% 0.22 145)'
          : ok
          ? 'oklch(78% 0.2 85)'
          : 'oklch(65% 0.22 25)',
        border: `1px solid ${great ? 'oklch(70% 0.22 145 / 0.4)' : ok ? 'oklch(78% 0.2 85 / 0.4)' : 'oklch(65% 0.22 25 / 0.4)'}`,
      }}
    >
      {diff === 0 ? '🎯 Perfect!' : `${diff} yr${diff !== 1 ? 's' : ''} off`}
    </div>
  );
}

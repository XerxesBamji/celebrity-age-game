import { useState } from 'react';
import { shuffle } from '../utils/gameLogic';
import CelebrityCard from './CelebrityCard';

/**
 * Phase 3: Per-player celebrity collection.
 *
 * Each player sees celebrities from `collectPool` one at a time (each player
 * gets their own independently shuffled order). They choose "Add to lineup"
 * or "Stop". There is NO limit — they can keep adding until they stop or
 * exhaust the entire pool.
 *
 * Running total is intentionally hidden to keep it tense!
 *
 * Props:
 *  collectPool  – array of enriched celebrity objects (12 celebs, separate from the 4)
 *  players      – array of player name strings
 *  guesses      – array of guess numbers, one per player
 *  onAllDone    – callback(lineups) where lineups[i] = [celebObj, ...] for player i
 */
export default function CollectionScreen({ players, collectPool, guesses, onAllDone }) {
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);

  // Each player gets their own shuffled order (array of collectPool indices)
  const [playerOrders] = useState(() =>
    players.map(() => shuffle(collectPool.map((_, i) => i)))
  );

  const [seenCount, setSeenCount] = useState(0);   // how many celebs current player has seen
  const [lineups, setLineups] = useState(players.map(() => [])); // lineup[i] = [celebObj, ...]
  const [phase, setPhase] = useState('intro');      // 'intro' | 'picking' | 'done'
  const [animKey, setAnimKey] = useState(0);

  const currentPlayer   = players[currentPlayerIdx];
  const currentOrder    = playerOrders[currentPlayerIdx];
  const currentLineup   = lineups[currentPlayerIdx];
  const currentCelebIdx = currentOrder[seenCount];
  const currentCeleb    = collectPool[currentCelebIdx];
  const poolExhausted   = seenCount >= collectPool.length;

  const handleAdd = () => {
    const celebObj = collectPool[currentCelebIdx];
    const newLineups = lineups.map((l, i) =>
      i === currentPlayerIdx ? [...l, celebObj] : l
    );
    setLineups(newLineups);

    const nextSeen = seenCount + 1;
    if (nextSeen >= collectPool.length) {
      // Exhausted the pool — auto-stop
      finishCurrentPlayer(newLineups);
    } else {
      setSeenCount(nextSeen);
      setAnimKey((k) => k + 1);
    }
  };

  const handleStop = () => {
    finishCurrentPlayer(lineups);
  };

  const handleSkip = () => {
    // Skip without adding — just move to next celeb
    const nextSeen = seenCount + 1;
    if (nextSeen >= collectPool.length) {
      // Ran out of celebs — must stop (auto-stop if lineup has ≥1)
      if (currentLineup.length > 0) {
        finishCurrentPlayer(lineups);
      }
    } else {
      setSeenCount(nextSeen);
      setAnimKey((k) => k + 1);
    }
  };

  const finishCurrentPlayer = (finalLineups) => {
    setPhase('done');
    setTimeout(() => {
      if (currentPlayerIdx < players.length - 1) {
        setCurrentPlayerIdx((i) => i + 1);
        setSeenCount(0);
        setPhase('intro');
        setAnimKey((k) => k + 1);
      } else {
        onAllDone(finalLineups);
      }
    }, 1200);
  };

  const allLoaded = collectPool.every((c) => !c.loading);

  return (
    <div
      id="collection-screen"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background:
          'radial-gradient(ellipse at 50% 50%, oklch(22% 0.1 280 / 0.3) 0%, transparent 70%), oklch(12% 0.02 280)',
      }}
    >
      {/* ── Handoff / Intro ── */}
      {phase === 'intro' && (
        <div
          key={`intro-${currentPlayerIdx}`}
          className="animate-scaleIn"
          style={{ textAlign: 'center', maxWidth: '440px' }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              fontWeight: 800,
              margin: '0 auto 20px',
              background: `hsl(${(currentPlayerIdx * 60) % 360}, 70%, 55%)`,
              boxShadow: `0 0 40px hsl(${(currentPlayerIdx * 60) % 360}, 70%, 55%, 0.5)`,
            }}
          >
            {currentPlayerIdx + 1}
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 900,
              margin: '0 0 8px',
            }}
          >
            {currentPlayer}'s Turn
          </h1>

          <p style={{ color: 'oklch(65% 0.05 280)', marginBottom: '6px' }}>
            Your guess was{' '}
            <strong style={{ color: 'oklch(84% 0.18 85)', fontSize: '1.3rem' }}>
              {guesses[currentPlayerIdx]}
            </strong>
          </p>

          <div
            className="glass"
            style={{ borderRadius: '14px', padding: '16px 20px', margin: '16px 0 24px', textAlign: 'left' }}
          >
            <p style={{ margin: '0 0 8px', fontWeight: 600, fontSize: '0.9rem', color: 'oklch(70% 0.05 280)' }}>
              How it works:
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'oklch(60% 0.04 280)', fontSize: '0.88rem', lineHeight: 1.7 }}>
              <li>You'll see celebrities <strong style={{ color: 'white' }}>one at a time</strong></li>
              <li><strong style={{ color: 'oklch(70% 0.22 145)' }}>Add</strong> them to build up your lineup total</li>
              <li><strong style={{ color: 'oklch(65% 0.22 25)' }}>Stop</strong> when you think you're close to your guess</li>
              <li>Running total is <strong style={{ color: 'white' }}>🤫 secret</strong> until the reveal!</li>
              <li>Keep going as long as you like — no limit!</li>
            </ul>
          </div>

          <button
            id={`start-picking-btn-player-${currentPlayerIdx + 1}`}
            className="btn-primary"
            onClick={() => { setPhase('picking'); setAnimKey((k) => k + 1); }}
            style={{ fontSize: '1.1rem', padding: '16px 40px' }}
          >
            I'm Ready →
          </button>
        </div>
      )}

      {/* ── Picking Phase ── */}
      {phase === 'picking' && !poolExhausted && (
        <div
          key={`pick-${currentPlayerIdx}-${animKey}`}
          style={{ width: '100%', maxWidth: '480px', textAlign: 'center' }}
        >
          {/* Status bar */}
          <div
            className="glass animate-fadeIn"
            style={{
              borderRadius: '14px',
              padding: '12px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', color: 'oklch(55% 0.04 280)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {currentPlayer}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {currentOrder.slice(0, seenCount + 1).map((poolIdx, i) => {
                const isInLineup = currentLineup.some((c) => c?.id === collectPool[poolIdx]?.id);
                return (
                  <div
                    key={i}
                    title={collectPool[poolIdx]?.name}
                    style={{
                      width: i === seenCount ? '10px' : '8px',
                      height: i === seenCount ? '10px' : '8px',
                      borderRadius: '50%',
                      background: isInLineup
                        ? 'oklch(70% 0.22 145)'
                        : i === seenCount
                        ? 'oklch(61% 0.24 280)'
                        : 'oklch(38% 0.03 280)',
                      transition: 'all 0.2s',
                    }}
                  />
                );
              })}
              {seenCount < collectPool.length - 1 && (
                <span style={{ color: 'oklch(40% 0.03 280)', fontSize: '0.75rem', marginLeft: '2px' }}>…</span>
              )}
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              <span style={{ color: 'oklch(70% 0.22 145)' }}>✓ {currentLineup.length}</span>
              <span style={{ color: 'oklch(45% 0.03 280)' }}> in lineup</span>
            </div>
          </div>

          {/* Celebrity card */}
          <div key={animKey} className="animate-scaleIn" style={{ marginBottom: '24px' }}>
            {!allLoaded || currentCeleb?.loading ? (
              <div className="animate-shimmer" style={{ borderRadius: '16px', height: '340px' }} />
            ) : (
              <CelebrityCard celeb={currentCeleb} hideAge size="large" />
            )}
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            {currentLineup.length > 0 && (
              <button
                id={`stop-btn-player-${currentPlayerIdx + 1}`}
                className="btn-red"
                onClick={handleStop}
                style={{ flex: 1, maxWidth: '180px' }}
              >
                🛑 Stop
              </button>
            )}
            <button
              id={`skip-btn-player-${currentPlayerIdx + 1}`}
              className="btn-ghost"
              onClick={handleSkip}
              disabled={currentLineup.length === 0 && seenCount === collectPool.length - 1}
              style={{ flex: currentLineup.length === 0 ? 0 : 1, maxWidth: '140px', padding: '16px 20px' }}
            >
              Skip →
            </button>
            <button
              id={`add-btn-player-${currentPlayerIdx + 1}`}
              className="btn-green"
              onClick={handleAdd}
              style={{ flex: 1, maxWidth: '180px' }}
            >
              ➕ Add
            </button>
          </div>

          {currentLineup.length === 0 && (
            <p style={{ marginTop: '10px', color: 'oklch(45% 0.03 280)', fontSize: '0.82rem' }}>
              Add at least one celebrity to your lineup
            </p>
          )}

          <p style={{ marginTop: '10px', color: 'oklch(38% 0.03 280)', fontSize: '0.78rem' }}>
            {collectPool.length - seenCount - 1} more celebrities available
          </p>
        </div>
      )}

      {/* ── Pool exhausted (shouldn't normally be reached without adding, but just in case) ── */}
      {phase === 'picking' && poolExhausted && (
        <div className="animate-scaleIn" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🎬</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', margin: '0 0 8px' }}>
            That's everyone!
          </h2>
          <p style={{ color: 'oklch(60% 0.04 280)', marginBottom: '20px' }}>
            You've seen all available celebrities.
          </p>
          <button className="btn-red" onClick={() => finishCurrentPlayer(lineups)}>
            🛑 Lock In Lineup
          </button>
        </div>
      )}

      {/* ── Done / handoff ── */}
      {phase === 'done' && (
        <div className="animate-scaleIn" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '12px' }}>✅</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontWeight: 800,
              margin: '0 0 8px',
            }}
          >
            Locked in!
          </h2>
          <p style={{ color: 'oklch(65% 0.05 280)' }}>
            {currentPlayer} collected{' '}
            <strong style={{ color: 'oklch(84% 0.18 85)' }}>{currentLineup.length}</strong>{' '}
            celebrit{currentLineup.length === 1 ? 'y' : 'ies'}
          </p>
          {currentPlayerIdx < players.length - 1 && (
            <p style={{ color: 'oklch(50% 0.03 280)', marginTop: '8px', fontSize: '0.9rem' }}>
              Passing to {players[currentPlayerIdx + 1]}…
            </p>
          )}
        </div>
      )}
    </div>
  );
}

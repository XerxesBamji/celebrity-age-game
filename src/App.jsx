import { useState } from 'react';
import { CELEBRITY_POOL, ARGENTINA_POOL } from './data/celebrities';
import { pickRandom } from './utils/gameLogic';
import { useCelebrityData } from './hooks/useCelebrityData';
import ModeSelectScreen from './components/ModeSelectScreen';
import SetupScreen from './components/SetupScreen';
import GuessScreen from './components/GuessScreen';
import CollectionScreen from './components/CollectionScreen';
import RevealScreen from './components/RevealScreen';

const PHASE = {
  MODE_SELECT: 'mode_select',
  SETUP: 'setup',
  GUESS: 'guess',
  COLLECT: 'collect',
  REVEAL: 'reveal',
};

/**
 * App shell — shows mode selection, then increments gameKey to fully remount
 * the game with fresh celebrities on Play Again.
 */
export default function App() {
  const [gameKey, setGameKey] = useState(0);
  const [selectedMode, setSelectedMode] = useState(null); // 'classic' | 'malena'

  if (!selectedMode) {
    return (
      <ModeSelectScreen
        onSelectMode={(mode) => setSelectedMode(mode)}
      />
    );
  }

  const pool = selectedMode === 'malena' ? ARGENTINA_POOL : CELEBRITY_POOL;

  return (
    <GameInstance
      key={gameKey}
      pool={pool}
      mode={selectedMode}
      onPlayAgain={() => setGameKey((k) => k + 1)}
      onChangeMode={() => setSelectedMode(null)}
    />
  );
}

/**
 * A single game instance. Completely fresh on every mount (new key = new celebrity picks).
 *
 * Celebrity split:
 *  - guessCelebs (4)  → shown in GuessScreen, ages hidden. Players guess their combined total.
 *  - collectPool (12) → shown one-at-a-time in CollectionScreen. Different from the 4 above.
 *                       Each player can keep adding as many as they like until they stop.
 */
function GameInstance({ pool, mode, onPlayAgain, onChangeMode }) {
  // Pick celebrities fresh on every mount — guaranteed different each game
  const [guessCelebs] = useState(() => pickRandom(pool, 4));
  const [collectPool] = useState(() => {
    const guessIds = new Set(guessCelebs.map((c) => c.id));
    const remaining = pool.filter((c) => !guessIds.has(c.id));
    return pickRandom(remaining, Math.min(12, remaining.length));
  });

  // Fetch photos + ages for both pools concurrently
  const guessCelebsData  = useCelebrityData(guessCelebs);
  const collectPoolData  = useCelebrityData(collectPool);

  const [phase, setPhase] = useState(PHASE.SETUP);
  const [players, setPlayers] = useState([]);
  const [guesses, setGuesses] = useState([]);
  // lineups[playerIdx] = array of celebrity objects from collectPool
  const [lineups, setLineups] = useState([]);

  switch (phase) {
    case PHASE.SETUP:
      return (
        <SetupScreen
          mode={mode}
          onBack={onChangeMode}
          onStart={(names) => {
            setPlayers(names);
            setPhase(PHASE.GUESS);
          }}
        />
      );

    case PHASE.GUESS:
      return (
        <GuessScreen
          players={players}
          celebrities={guessCelebsData}
          onAllGuessed={(guessArray) => {
            setGuesses(guessArray);
            setPhase(PHASE.COLLECT);
          }}
        />
      );

    case PHASE.COLLECT:
      return (
        <CollectionScreen
          players={players}
          collectPool={collectPoolData}
          guesses={guesses}
          onAllDone={(lineupArray) => {
            setLineups(lineupArray);
            setPhase(PHASE.REVEAL);
          }}
        />
      );

    case PHASE.REVEAL:
      return (
        <RevealScreen
          players={players}
          celebrities={guessCelebsData}
          guesses={guesses}
          lineups={lineups}
          onPlayAgain={onPlayAgain}
        />
      );

    default:
      return null;
  }
}


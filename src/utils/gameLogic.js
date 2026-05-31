/**
 * Shuffle an array using Fisher-Yates.
 */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Pick `n` random items from an array.
 */
export function pickRandom(arr, n) {
  return shuffle(arr).slice(0, n);
}

/**
 * Calculate the score for a player.
 * Score = absolute difference between their guess and their lineup sum.
 * Lower is better.
 */
export function calcScore(guess, lineupCelebs) {
  const lineupSum = lineupCelebs.reduce((acc, c) => acc + (c.age ?? 0), 0);
  return Math.abs(guess - lineupSum);
}

/**
 * Determine the winner from an array of player results.
 * Returns the index of the player with the lowest score.
 * Ties: the player with the lower index (earlier guess) wins.
 */
export function findWinner(results) {
  // results: [{ playerName, guess, lineup, lineupSum, score }]
  let bestIdx = 0;
  for (let i = 1; i < results.length; i++) {
    if (results[i].score < results[bestIdx].score) bestIdx = i;
  }
  return bestIdx;
}

export function buildResults(players, guesses, lineups, celebrities) {
  // Calculate the target age (sum of the 4 original celebrities)
  const targetSum = celebrities.reduce((acc, c) => acc + (c?.age ?? 0), 0);

  return players.map((name, i) => {
    const lineupCelebs = lineups[i] || [];
    const lineupSum = lineupCelebs.reduce((acc, c) => acc + (c?.age ?? 0), 0);
    // Score is closeness to the actual target sum of the original 4 celebrities
    const score = Math.abs(targetSum - lineupSum);
    return { 
      playerName: name, 
      guess: guesses[i] || 0, 
      lineup: lineups[i] || [], 
      lineupCelebs, 
      lineupSum, 
      score,
      targetSum
    };
  });
}

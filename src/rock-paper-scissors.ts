// src/rock-paper-scissors.ts

export function play(player1: string, player2: string): number {
  // Zulässige Spielzüge
  const validMoves = ['rock', 'paper', 'scissors'];

  // Eingaben normalisieren (Trimmen und Kleinschreibung ignorieren)
  const move1 = player1.trim().toLowerCase();
  const move2 = player2.trim().toLowerCase();

  if (!validMoves.includes(move1)) {
    throw new Error('Invalid move by player 1');
  }
  if (!validMoves.includes(move2)) {
    throw new Error('Invalid move by player 2');
  }

  if (move1 === move2) {
    return 0; 
  }

  if (
      (move1 === 'rock' && move2 === 'scissors') ||
      (move1 === 'scissors' && move2 === 'paper') ||
      (move1 === 'paper' && move2 === 'rock')
  ) {
    return 1; 
  }

  return 2; 
}
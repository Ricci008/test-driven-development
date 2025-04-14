import { play } from './rock-paper-scissors';

describe('Rock-Paper-Scissors', () => {
    test.each([
        // Spieler 1 gewinnt
        ['rock', 'scissors', 1],
        ['scissors', 'paper', 1],
        ['paper', 'rock', 1],

        // Spieler 2 gewinnt
        ['scissors', 'rock', 2],
        ['paper', 'scissors', 2],
        ['rock', 'paper', 2],

        // Unentschieden
        ['rock', 'rock', 0],
        ['paper', 'paper', 0],
        ['scissors', 'scissors', 0],
    ])(
        'returns correct result for player1: %s, player2: %s',
        (player1, player2, expected) => {
            expect(play(player1, player2)).toBe(expected);
        }
    );

    test('ignores case and trims inputs', () => {
        expect(play('  RoCK ', ' sCIssOrs')).toBe(1);
        expect(play(' paper  ', 'PAPER')).toBe(0);
        expect(play(' SCISSORS', '  rock ')).toBe(2);
    });

    test('throws an exception for invalid inputs', () => {
        expect(() => play('lizard', 'rock')).toThrowError('Invalid move by player 1');
        expect(() => play('rock', 'spock')).toThrowError('Invalid move by player 2');
        expect(() => play('fire', 'ice')).toThrowError('Invalid move by player 1');
    });
});
import { calculateWinner, isBoardFull } from '../helpers';

test('Should accurately assess which player has won', () => {
    const square = ['X', 'O', null, 'O', 'X', null, null, 'O', 'X'];
    const result = calculateWinner(square);
    expect(result).toBe('X');
});

test('Should ascertain that neither player has won', () => {
    const square = ['X', 'O', null, 'X', 'O', null, 'O', null, 'X'];
    const result = calculateWinner(square);
    expect(result).toBe(null);
});

test('Should detect that the board is not full', () => {
    const square = ['X', 'O', null, 'X', 'O', null, 'O', null, 'X'];
    const result = isBoardFull(square);
    expect(result).toBe(false);
});

test('Should detect that the board is full', () => {
    const square = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'O', 'X'];
    const result = isBoardFull(square);
    expect(result).toBe(true);
});

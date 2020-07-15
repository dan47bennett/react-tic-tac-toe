import React from 'react';
import Square from './Square';
import { BoardBox } from './ui/BoardUI';

const Board = ({ squares, onClick }) => (
    <BoardBox>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </BoardBox>
);

export default Board;

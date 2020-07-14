import React from 'react';
import Square from './Square';
import { BoardContainer } from './ui/BoardUI';

const Board = ({ squares, onClick }) => (
    <BoardContainer component="div">
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </BoardContainer>
);

export default Board;

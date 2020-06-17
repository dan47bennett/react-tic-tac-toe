import React from 'react';
import Square from './Square';
import { boardStyles } from '../styles'


const Board = ({squares, onClick}) => (
    <div style = {boardStyles}>
        {squares.map((square, i) => (
            <Square key = {i} value = {square} onClick = {() => onClick(i)} />
        ))}
    </div>
);


export default Board;
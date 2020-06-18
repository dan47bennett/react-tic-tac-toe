import React, { useState } from 'react';
import { calculateWinner, isBoardFull } from '../helpers';
import Board from './Board';
import { gameStyles, buttonStyles, displayMessageStyles } from '../styles';


const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const fullBoard = isBoardFull(history[stepNumber]);


    const handleClick = i => {
        const pointInHistory = history.slice(0, stepNumber + 1)
        const current = pointInHistory[stepNumber]
        const squares = [...current]

        //if game is won or square is occupied just return
        if (winner || squares[i]) return;

        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...pointInHistory, squares]);
        setStepNumber(pointInHistory.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = step => {
        if (0 <= step && history[step]) {
            setStepNumber(step);
            setXIsNext(step % 2 === 0);
        }
    };

    const getDisplayMessage = () => {
        if (winner) return `Winner: ${winner}`;
        if (fullBoard) return 'Stalemate';
        return `Next player: ${xIsNext ? 'X' : 'O'}`;

    };

    return (
        <>
            <Board squares = {history[stepNumber]} onClick = {handleClick} />
            <div style = {gameStyles}>
                <div>
                    <button style = {buttonStyles.backButton} onClick = {() => jumpTo(stepNumber - 1)}></button>
                    <button style = {buttonStyles.resetButton} onClick = {() => jumpTo(0)}></button>
                    <button style = {buttonStyles.nextButton} onClick = {() => jumpTo(stepNumber + 1)}></button> 
                </div>
                <div style = {displayMessageStyles}>
                    {getDisplayMessage()}
                </div>
            </div>
        </>
    )
};


export default Game;
import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';
import { gameStyles } from '../styles';


const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

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
        if(0 <= step && history[step]) {
            setStepNumber(step);
            setXIsNext(step % 2 === 0);
        }
    }

    const renderMoves2 = () => {
        return(
            <div>
                <button onClick = {() => jumpTo(stepNumber - 1)}>Previous Move</button>
                <button onClick = {() => jumpTo(0)}>Reset game</button>
                <button onClick = {() => jumpTo(stepNumber + 1)}>Next Move</button>
            </div>
        )}

    return (
        <>
            <Board squares = {history[stepNumber]} onClick = {handleClick} />
            <div style = {gameStyles}>
                {winner ? 'Winner: ' + winner : 'Next Player :' + (xIsNext ? 'X' : 'O')}
                {renderMoves2()}
            </div>
        </>
    )
};


export default Game;
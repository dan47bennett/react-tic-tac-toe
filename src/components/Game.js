import React, { useState } from 'react';
import { calculateWinner, isBoardFull } from '../helpers';
import Board from './Board';
import {
    BoardControls,
    BackArrow,
    Replay,
    ForwardArrow,
    NextPlayerText
} from './ui/GameUI';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const fullBoard = isBoardFull(history[stepNumber]);

    const handleClick = (i) => {
        const pointInHistory = history.slice(0, stepNumber + 1);
        const current = pointInHistory[stepNumber];
        const squares = [...current];

        //if game is won or square is occupied just return
        if (winner || squares[i]) return;

        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...pointInHistory, squares]);
        setStepNumber(pointInHistory.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
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
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <BoardControls>
                <div>
                    <BackArrow onClick={() => jumpTo(stepNumber - 1)} />
                    <Replay onClick={() => jumpTo(0)} />
                    <ForwardArrow onClick={() => jumpTo(stepNumber + 1)} />
                </div>
                <NextPlayerText>{getDisplayMessage()}</NextPlayerText>
            </BoardControls>
        </>
    );
};

export default Game;

import React from 'react';
import { squareStyles } from '../styles';
import Radium from 'radium';

const Square = ({ value, onClick }) => (
    <button style={squareStyles} onClick={onClick}>
        {value}
    </button>
);

export default Radium(Square);

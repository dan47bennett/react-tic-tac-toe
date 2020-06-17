import React from 'react';
import { squareStyles } from '../styles'


const Square = ({value, onClick}) => (
    <button style = {squareStyles} onClick = {onClick}>
        {value}
    </button>
);

export default Square;
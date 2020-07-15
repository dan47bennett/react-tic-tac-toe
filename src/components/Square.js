import React from 'react';
import { SquareButton } from './ui/SquareUI';

const Square = ({ value, onClick }) => (
    <SquareButton onClick={onClick}>{value}</SquareButton>
);

export default Square;

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const squareStyles = {
    background: 'lightblue',
    border: '5px solid darkblue',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
        background: 'skyblue'
    }
};

export const SquareButton = styled(Button)(squareStyles);

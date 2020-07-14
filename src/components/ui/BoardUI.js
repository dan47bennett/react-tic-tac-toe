import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const boardStyles = {
    border: '5px solid darkblue',
    width: '500px',
    height: '500px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

export const BoardContainer = styled(Box)(boardStyles);

import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const HeaderStyles = {
    flexGrow: 1,
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '1em',
    marginBottom: '2em',
    backgroundColor: 'lightblue',
    color: 'darkblue'
};

export const HeaderDiv = styled(Box)(HeaderStyles);

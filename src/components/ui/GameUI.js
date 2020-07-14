import { styled } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReplayIcon from '@material-ui/icons/Replay';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

const gameStyles = {
    width: 'fit-content',
    margin: '20px auto'
};

const displayMessageStyles = {
    textAlign: 'center'
};

const buttonStyles = {
    backgroundColor: 'white',
    borderStyle: 'none',
    margin: '0 5px 10px 5px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '40px',
    height: '40px'
};

export const Replay = styled(ReplayIcon)(buttonStyles);
export const BackArrow = styled(ArrowBackIcon)(buttonStyles);
export const ForwardArrow = styled(ArrowForwardIcon)(buttonStyles);
export const NextPlayerText = styled(Card)(displayMessageStyles);
export const BoardControls = styled(Container)(gameStyles);

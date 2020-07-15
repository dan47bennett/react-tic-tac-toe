import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const loginDivStyle = {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center'
};

const loginButtonStyles = {
    backgroundColor: 'white',
    borderStyle: 'none',
    margin: '0 5px 10px 5px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100px',
    height: '40px',
    backgroundImage: `url(${require('../../assets/google.png')})`,
    display: 'inline-block',
    borderRadius: '5px',
    border: 'thin solid lightgray',
    whiteSpace: 'nowrap'
};

export const LoginDiv = styled(Box)(loginDivStyle);
export const LoginButton = styled(Button)(loginButtonStyles);

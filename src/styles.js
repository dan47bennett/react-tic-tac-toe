export const squareStyles = {
    background: 'lightblue',
    border: '5px solid darkblue',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    ':hover': {
        background: 'skyblue'
    }
};

export const loginDivStyle = {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center'
};

export const loginButtonStyles = {
    backgroundColor: 'white',
    borderStyle: 'none',
    margin: '0 5px 10px 5px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100px',
    height: '40px',
    backgroundImage: `url(${require('./assets/google.png')})`,
    display: 'inline-block',
    borderRadius: '5px',
    border: 'thin solid lightgray',
    whiteSpace: 'nowrap'
};

export const headerStyles = {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '1em',
    marginBottom: '2em',
    backgroundColor: 'lightblue',
    color: 'darkblue'
};

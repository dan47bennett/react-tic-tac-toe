import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import { headerStyles } from '../styles';
import googleLogOut from '../helpers';

const Header = () => {
    const userContext = useContext(AuthContext);

    if (userContext.currentUser) {
        const nameOfUser = userContext.currentUser.displayName;
        const firstNameOfUser = nameOfUser.substr(0, nameOfUser.indexOf(' '));
        const welcomeText = `Hi, ${firstNameOfUser}`;
        return (
            <>
                <div style={headerStyles}>
                    <h1>Tic Tac Pro</h1>
                    <div>{welcomeText}</div>
                </div>
                <div>
                    <button onClick={googleLogOut}>Sign Out</button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div style={headerStyles}>
                    <h1>Tic Tac Pro</h1>
                </div>
            </>
        );
    }
};

export default Header;

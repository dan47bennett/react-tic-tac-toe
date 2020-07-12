import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import { headerStyles } from '../styles';

const Header = () => {
    const currentUser = useContext(AuthContext);

    if (currentUser) {
        const nameOfUser = currentUser.currentUser.displayName;
        const firstNameOfUser = nameOfUser.substr(0, nameOfUser.indexOf(' '));
        const welcomeText = `Hi, ${firstNameOfUser}`;
        return (
            <>
                <div style={headerStyles}>
                    <h1>{welcomeText}</h1>
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

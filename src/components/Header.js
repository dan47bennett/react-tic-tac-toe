import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import { HeaderDiv } from './ui/HeaderUI';
import googleLogOut from '../helpers';

const Header = () => {
    const userContext = useContext(AuthContext);

    if (userContext.currentUser) {
        const nameOfUser = userContext.currentUser.displayName;
        const firstNameOfUser = nameOfUser.substr(0, nameOfUser.indexOf(' '));
        const welcomeText = `Hi, ${firstNameOfUser}`;
        return (
            <>
                <HeaderDiv>
                    <h1>Tic Tac Pro</h1>
                    <div>{welcomeText}</div>
                    <button onClick={googleLogOut}>Sign Out</button>
                </HeaderDiv>
            </>
        );
    } else {
        return (
            <>
                <HeaderDiv>
                    <h1>Tic Tac Pro</h1>
                </HeaderDiv>
            </>
        );
    }
};

export default Header;

import React, { useCallback, useContext } from 'react';
import firebase from 'firebase';
import { withRouter, Redirect } from 'react-router';
import { LoginButton, LoginDiv } from './ui/LoginUI';
import { AuthContext } from '../Auth';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async function googleLogin() {
            try {
                const provider = await new firebase.auth.GoogleAuthProvider();
                await firebase.auth().signInWithPopup(provider);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <LoginDiv>
                <h1>Please sign in</h1>
                <LoginDiv>
                    <LoginButton onClick={handleLogin} />
                </LoginDiv>
            </LoginDiv>
        </>
    );
};

export default withRouter(Login);

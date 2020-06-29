import React, { useContext } from 'react'
import firebase from 'firebase'
import { withRouter, Redirect } from "react-router";
import { loginButtonStyles } from '../styles'
import { AuthContext } from '../Authorisation';


const Login = ({ history }) => {
    async function googleLogin() {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            history.push('/')
        } catch (error) {
            alert(error);
        }
    }

    const currentUser = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/'/>;
    }


    return (
        <>
            <div>Please log in with google</div>
            <button style={loginButtonStyles} onClick ={googleLogin}>HELLO</button>
        </>
    )
}

export default withRouter(Login);
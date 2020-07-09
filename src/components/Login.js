import React, { useCallback, useContext } from "react";
import firebase from "firebase";
import { withRouter, Redirect } from "react-router";
import { loginButtonStyles, loginDivStyle } from "../styles";
import { AuthContext } from "../Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async function googleLogin() {
      try {
        const provider = await new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
        history.push("/");
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
      <div style={loginDivStyle}>
        <h1>Please log in with google</h1>
        <div style={loginDivStyle}>
          <button style={loginButtonStyles} onClick={handleLogin} />
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);

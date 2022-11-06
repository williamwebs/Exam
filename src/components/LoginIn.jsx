import React from "react";
import { signInWithRedirect, provider, auth } from "../config";

function Login() {
  // handle sign in
  const signIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="inner-container">
          <button className="btn" onClick={signIn}>
            Sign In using Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

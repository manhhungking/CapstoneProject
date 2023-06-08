import * as React from "react";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useLogin, useNotify, useRedirect } from "react-admin";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

export function LoginFacebook() {
  const [user, setUser] = useState({});
  const login = useLogin();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const notify = useNotify();
  console.log("Facebook!!!");
  window.FB.login(function(response) {
    if (response.authResponse) {
      console.log("Welcome!  Fetching your information.... ");
      // window.FB.api("/me", function(response) {
      //   console.log("Good to see you, " + response.name + ".");
      // });
    } else {
      console.log("User cancelled login or did not fully authorize.");
    }
  });

  return (
    <LoginSocialFacebook
      appId="6284345351642669"
      onResolve={(response) => {
        console.log(response);
      }}
      onReject={(error) => {
        console.log(error);
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
}

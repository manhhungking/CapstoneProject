import * as React from "react";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useLogin, useNotify } from "react-admin";
{
  /* <script src="https://apis.google.com/js/api:client.js" async defer />; */
}

export function LoginGoogle() {
  const login = useLogin();
  const notify = useNotify();
  const handleLogin = (data) => {
    login({ email: data.email, password: "abc", isgoogle: true }).catch(() =>
      notify("Cannot login! Try again later", { type: "error" })
    );
  };
  function handleRegister(data) {
    // console.log("Register");
    axios
      .post("https://backend-capstone-project.herokuapp.com/save_user/", {
        username: data.given_name,
        password: "abc",
        email: data.email,
        avatar: data.picture,
        IsGoogle: true,
      })
      .then((res) => {
        handleLogin(data);
      })
      .catch((err) => {
        notify("Sign up fail! Email has been used", {
          type: "error",
        });
        // console.log(err);
      });
  }
  function checkExist(data) {
    axios
      .post("https://backend-capstone-project.herokuapp.com/check_user/", {
        email: data.email,
      })
      .then((res) => {
        if (res.data["IsGoogle"] === false) {
          notify("Sign in fail! Account has been used", {
            type: "error",
          });
        } else {
          handleLogin(data);
        }
      })
      .catch((err) => {
        // console.log(err.response.status);
        if (err.response.status === 404) {
          handleRegister(data);
        } else {
          notify("Cannot sign in! Try again later", {
            type: "error",
          });
          // console.log(err);
        }
      });
  }

  function handleCallbackResponse(response) {
    // console.log("Encoded JWT ID Token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    // setUser(userObject);
    checkExist(userObject);
  }
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "822938244138-clfoue6547i2u7js0oc97mk613p4slh3.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // google.accounts.id.prompt();
  }, []);
  return (
    <div
      id="signInDiv"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}

import * as React from "react";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useLogin, useNotify, useRedirect } from "react-admin";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import "../Style/LoginFacebook.css";
export function LoginFacebook() {
  const login = useLogin();
  const notify = useNotify();

  const handleLogin = (data) => {
    login({ email: data.email, password: "abc", isgoogle: true }).catch(() =>
      notify("Cannot login! Try again later", { type: "error" })
    );
  };
  function handleRegister(data) {
    axios
      .post("http://localhost:8000/save_user/", {
        username: data.given_name,
        password: "abc",
        email: data.email,
        avatar: data.avatar,
        IsGoogle: true,
      })
      .then((res) => {
        handleLogin(data);
      })
      .catch((err) => {
        notify("Sign up fail! Email has been used", {
          type: "error",
        });
        console.log(err);
      });
  }
  function checkExist(data) {
    axios
      .post("http://localhost:8000/check_user/", {
        email: data.email,
      })
      .then((res) => {
        console.log(res.data["IsGoogle"]);
        if (res.data["IsGoogle"] === false) {
          notify("Sign in fail! Account has been used", {
            type: "error",
          });
        } else {
          handleLogin(data);
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 404) {
          handleRegister(data);
        } else {
          notify("Cannot sign in! Try again later", {
            type: "error",
          });
          console.log(err);
        }
      });
  }
  const handleButtonLogin = (response) => {
    const data = {
      given_name: response.name,
      email: response.email,
      avatar: response.picture.data.url,
    };
    checkExist(data);
  };
  return (
    <LoginSocialFacebook
      appId="6284345351642669"
      onResolve={(response) => {
        // console.log("Response: ", response);
        handleButtonLogin(response.data);
      }}
      onReject={(error) => {
        console.log(error);
      }}
    >
      <button className="loginBtn loginBtn--facebook">
        Login with Facebook
      </button>
    </LoginSocialFacebook>
  );
}

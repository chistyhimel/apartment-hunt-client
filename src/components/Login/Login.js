import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import NavBar from "../NavBar/NavBar";
import fbIcon from "../../images/logos/facebook.png";
import googleIcon from "../../images/logos/google.png";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [newUser, setNewUser] = useState(false);

  const provider = new firebase.auth.GoogleAuthProvider();

  const googleLogin = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user)
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div className="login-container">
          <div className="login-form">
            <h3 className="font-weight-bold pb-3">
              {newUser ? "Create an account" : "Login"}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              {newUser && (
                <div class="form-group">
                  <input
                    type="text"
                    name="First Name"
                    ref={register({ required: true })}
                    className="form-control"
                    placeholder="First Name"
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}{" "}
                </div>
              )}
              {newUser && (
                <div class="form-group">
                  <input
                    type="text"
                    name="Last Name"
                    ref={register({ required: true })}
                    className="form-control"
                    placeholder="Last Name"
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}{" "}
                </div>
              )}
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                ref={register({ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}{" "}
              <br />
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}{" "}
              <br />
              <button type="submit" className="btn btn-colour-1 form-control">
                Login
              </button>
            </form>
            <div className="text-center pt-3">
              <small className="">
                Don't have an account?{" "}
                <u
                  onClick={() => setNewUser(!newUser)}
                  style={{ cursor: "pointer" }}
                >
                  Create an account
                </u>
              </small>
            </div>
          </div>

          <div className="other-login mb-3">
            <h6 className="or-text">or</h6>
          </div>
          <div className="facbook-login d-flex align-items-center mb-3">
            <img src={fbIcon} alt="" className="img-fluid"/>
            <div className="mx-auto">Continue with Facebook</div>
          </div>
          <div className="facbook-login d-flex align-items-center" onClick={googleLogin}>
            <img src={googleIcon} alt="" className="img-fluid"/>
            <div className="mx-auto">Continue with Google</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;

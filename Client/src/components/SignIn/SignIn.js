import React, { Fragment, useState } from "react";
import "./SignIn.css";

const SignIn = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [showBtn, setShowBtn] = useState("");
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };
  const SignUpHandler = (event) => {
    event.preventDefault();
    // setSignUp("");
  };
  return (
    <Fragment>
      
      <form className="sign-in__form" onSubmit={submitHandler}>
        <label>Email</label>
        <input
          className="userEmailInput"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          placeholder="Enter email"
        ></input>
        <label>Password</label>
        <input
          className="userPwInput"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          placeholder="Enter Password"
        ></input>
        <p className="Message"></p>
        <p className="Message"></p>
        <button className={showBtn} type="submit">
          Login{" "}
        </button>
        <button className="" type="button">
          SignUp{" "}
        </button>
      </form>
    </Fragment>
  );
};
export default SignIn;

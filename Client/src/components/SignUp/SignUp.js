import React, { Fragment, useState } from "react";
import "./SignUp.css";

const SignUp = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUserName, setUserName] = useState("");
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

  return (
    <Fragment>
      <form className="sign-up__form" onSubmit={submitHandler}>
        <label>User Name</label>
        <input
         className="userEmailInput"
         type="email"
         value={enteredUserName}
         onChange={emailChangeHandler}
         onBlur={validateEmailHandler}
         placeholder="Enter User Name"
        ></input>
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
        ></input>{" "}
        <p></p>
        <p></p>
        <button  type="button">
          SignUp{" "}
        </button>
      </form>
    </Fragment>
  );
};
export default SignUp;

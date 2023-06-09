import React, { Fragment, useState } from "react";
import { emailValidator } from "../../helpers/regexValidator";
import "./../../styles/main.scss";
import Message from "./Message"

const SignIn = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showMessage, setShowMessage] = useState(null);
  const [MessageContent, setMessageContent]=useState('')
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  //E-mail validation
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value.trim());
    !emailValidator.test(enteredEmail)
      ? setEmailIsValid(false)
      : setEmailIsValid(true);
  };

  //Password log in validation
  function passHandler(e) {
    const item = e.target.value.trim();
    setEnteredPassword(item);
    if (item.length < 1) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  }

  //Change page to SignUP
  function signUpHandler(e) {
    e.preventDefault();
    document.location.replace("/signup");
  }

  const logInHandler = async function (event) {
    event.preventDefault();
    if (
      emailIsValid &&
      passwordIsValid &&
      enteredEmail !== "" &&
      enteredPassword !== ""
    ) {
      const response = await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/home");
      } else {
        setShowMessage(1);
        setMessageContent('Email or Password is incorrect')
      }
    } else {
      setShowMessage(1);
      setMessageContent('Please check input fields again')
    }
  };

  const HideMessage = () => {
    setShowMessage(null);
  };

  return (
    <Fragment>
      <form className="sign-in__form" onSubmit={logInHandler}>
        <label className="sign-in__form--label">Email</label>
        <input
          className="sign-in__form--input"
          type="email"
          onChange={emailHandler}
          placeholder="example@example.com"
        ></input>
        <label className="sign-in__form--label">Password</label>
        <input
          className="sign-in__form--input"
          type="password"
          onChange={passHandler}
          placeholder="Enter your password"
        ></input>
        {!passwordIsValid ? (
          <p className="sign-up__form--p">The password input field cannot be empty </p>
        ) : (
          ""
        )}

        {!emailIsValid ? (
          <p className="sign-up__form--p">Wrong format for e-mail address (example: example@email.com)</p>
        ) : (
          ""
        )}
        <button className="sign-in__form--btn" type="submit">
          Login{" "}
        </button>
        <button className="sign-in__form--btn" onClick={signUpHandler}>
          SignUp
        </button>
      </form>
      {showMessage ? <Message hideM={HideMessage} messageContent={MessageContent}/> : ""}
    </Fragment>
  );
};
export default SignIn;

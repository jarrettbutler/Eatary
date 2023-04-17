import React, { Fragment, useState } from "react";
import { emailValidator } from "../../helpers/regexValidator";
import "./../../styles/main.scss";

const SignUp = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  //E-mail validation
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value.trim());
    !emailValidator.test(enteredEmail)
      ? setEmailIsValid(false)
      : setEmailIsValid(true);
  };

  //Entered User name validation
  function nameHandler(e) {
    const item = e.target.value.trim();
    setEnteredName(item);
    if (item.length < 1) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
  }

  //Password sign up validation
  function passwordHandler(e) {
    const item = e.target.value.trim();
    setEnteredPassword(item);
    if (item.length < 8) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  }

  //Change page to SingIN
  function signInHandler(e) {
    e.preventDefault();
    document.location.replace("/");
  }

  const sigUpHandler = async function (event) {
    event.preventDefault();
    if (
      emailIsValid &&
      passwordIsValid &&
      enteredEmail !== "" &&
      enteredPassword !== ""
    ) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
          loggedIn: true,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/home");
        console.log(response);
      } else {
        alert("Failed to login");
      }
    } else {
      alert("Please check input fields again");
    }
  };

  return (
    <Fragment>
      <form className="sign-in__form" onSubmit={sigUpHandler}>
        <label className="sign-in__form--label">User Name</label>
        <input
          className="sign-in__form--input"
          type="text"
          onChange={nameHandler}
          placeholder="Enter User Name"
        ></input>
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
          onChange={passwordHandler}
          placeholder="Enter your Password"
        ></input>{" "}
        <p></p>
        {!passwordIsValid ? (
          <p className="sign-up__form--p">Password must be at least 8 characters long </p>
        ) : (
          ""
        )}
        {!emailIsValid ? (
          <p className="sign-up__form--p">Wrong format for e-mail address (example: example@email.com)</p>
        ) : (
          ""
        )}
        {!nameIsValid ? <p className="sign-up__form--p">Name field can not be empty</p> : ""}
        <button type="submit" className="sign-in__form--btn">SignUp </button>
        <button onClick={signInHandler} type="button" className="sign-in__form--btn">
          Or Login
        </button>
      </form>
    </Fragment>
  );
};
export default SignUp;

import React, { Fragment, useState } from "react";
import "./SignUp.css";
import { emailValidator } from "../../helpers/regexValidator";

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
    document.location.replace("/login");
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
      <form className="sign-up__form" onSubmit={sigUpHandler}>
        <label>User Name</label>
        <input
          className="userEmailInput"
          type="text"
          onChange={nameHandler}
          placeholder="Enter User Name"
        ></input>
        <label>Email</label>
        <input
          className="userEmailInput"
          type="email"
          onChange={emailHandler}
          placeholder="example@example.com"
        ></input>
        <label>Password</label>
        <input
          className="userPwInput"
          type="password"
          onChange={passwordHandler}
          placeholder="Enter your Password"
        ></input>{" "}
        <p></p>
        {!passwordIsValid ? (
          <p>Password must be at least 8 characters long </p>
        ) : (
          ""
        )}
        {!emailIsValid ? (
          <p>Wrong format for e-mail address (example: example@email.com)</p>
        ) : (
          ""
        )}
        {!nameIsValid ? <p>Name field can not be empty</p> : ""}
        <button type="submit">SignUp </button>
        <button onClick={signInHandler} type="button">
          Or Login
        </button>
      </form>
    </Fragment>
  );
};
export default SignUp;

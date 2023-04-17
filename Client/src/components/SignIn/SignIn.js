import React, { Fragment, useState } from "react";
import { emailValidator } from "../../helpers/regexValidator";
import "./SignIn.css";

const SignIn = (props) => {
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
        console.log(response);
      } else {
        alert("Email or Password is incorrect");
      }
    } else {
      alert("Please check input fields again");
    }
  };

  return (
    <Fragment>
      <form className="sign-in__form" onSubmit={logInHandler}>
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
          onChange={passHandler}
          placeholder="Enter your password"
        ></input>
        {!passwordIsValid ? (
          <p>The password input field cannot be empty </p>
        ) : (
          ""
        )}

        {!emailIsValid ? (
          <p>Wrong format for e-mail address (example: example@email.com)</p>
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
    </Fragment>
  );
};
export default SignIn;

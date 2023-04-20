import React, { useState } from 'react';
import '../styles/main.scss'

function Contact() {
  const validateEmail = (email) => {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    return emailRegex.test(String(email).toLowerCase())
  }

  const [formState, setformState] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [errMsg, seterrMsg] = useState("")
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!errMsg) {
      console.log("submitForm", formState)
    }
  }


  const handleChange = (e) => {
    if (e.target.name === "email") {
      const validEmail = validateEmail(e.target.value)
      if (!validEmail) {
        seterrMsg("enter valid email")

      }
      else {
        seterrMsg("")
      }
    }
    else {
      if (!e.target.value.length) {
        seterrMsg(`${e.target.name} is required`)

      }
      else {
        seterrMsg("")
      }
    }



    if (!errMsg) {
      setformState({ ...formState, [e.target.name]: e.target.value })
    }
  };


  return (
    < div className="contactForm" >
      <div className="background">
        <div className="containerContact" >
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>

              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input type="text" id="name" name="name" className="app-form-control" placeholder=" NAME"
                      onBlur={handleChange} defaultValue={name}></input>

                  </div>
                  <div className="app-form-group">
                    <input type="text" name="email" className="app-form-control" placeholder=" EMAIL"
                      onBlur={handleChange} defaultValue={email}></input>
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" name="message" placeholder="MESSAGE"
                      onBlur={handleChange} defaultValue={message} />
                  </div>
                  <div className="app-form-group buttons">
                    {/* <button className="app-form-button" onClick={handleCancel} >CANCEL</button> */}
                    <button className="app-form-button" type="submit" onSubmit={handleSubmit}>SEND</button>
                  </div>

                  {errMsg && (
                    <div style={{ color: "red", fontSize: 20 }}
                      class="status">{errMsg} </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;
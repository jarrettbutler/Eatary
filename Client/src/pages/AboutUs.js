import { Fragment } from "react";
import "./../styles/main.scss";

function AboutUs() {

    function signInHandler(e) {
        e.preventDefault();
        document.location.replace("/login");
    }
    function signUpHandler(e) {
        e.preventDefault();
        document.location.replace("/signup");
    }
    return (
        <Fragment>
            <div className="SingUPage">
                <form className="about-us__form">
                    <h2 className="about-us__form--h2">About Us</h2>
                    <label className="about-us__form--label">Here at Eatary it is our mission to bring thousands of recipes to you at the touch of your fingertips. We have created a simple and elegant site so you can get some of your favourite recipes with just a touch of a button. Simply sign up, start searching and add some of your favourite recipes to your bookmarks! For our more creative and innovative chefs you can add YOUR recipes for millions to try! When you search with our site you are supporting local creators from website to recipes let Eatary be your choice!</label>
                    <br></br>
                    <label className="about-us__form--label">This product was designed by students for the people please feel free to donate using our donate button!</label>
                    <br></br>
                    <div className="btn-wrapper">
                    <button onClick={signInHandler} type="button" className="about-us__form--btn">
                        Login
                    </button>
                    <br></br>
                    <button onClick={signUpHandler} type="button" className="about-us__form--btn">
                        Or SignUp
                    </button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
};

export default AboutUs;
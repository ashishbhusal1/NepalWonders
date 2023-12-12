import React from "react";
import { Form } from "../ui/Form";
import classes from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <div className={classes.signupPage}>
      <div className={classes.overlapGroup}>
        <div className={classes.signUp}>
          <button className={classes.button}>
            <div className={classes.signUpButton}>
              <div className={classes.textWrapper}>Sign Up</div>
            </div>
          </button>
          <div className={classes.orSignUpWith}>
            <img className={classes.line} alt="Line" src="line-4.svg" />
            <div className={classes.orSignUpWith2}>
              &nbsp;&nbsp;Or Sign Up With
            </div>
            <img className={classes.line} alt="Line" src="line-5.svg" />
          </div>
          <div className={classes.group}>
            <div className={classes.googleLogoWrapper}>
              <img
                className={classes.googleLogo}
                alt="Google g logo"
                src="https://c.animaapp.com/j9rvoJJX/img/google--g--logo@2x.png"
              />
            </div>
            <div className={classes.XMLIDwrapper}>
              <img className={classes.XMLID} alt="Xmlid" src="https://c.animaapp.com/j9rvoJJX/img/xmlid-17-@2x.png" />
            </div>
            <div className={classes.iconAwesomeAppleWrapper}>
              <img
                className={classes.iconAwesomeApple}
                alt="Icon awesome apple"
                src="https://c.animaapp.com/j9rvoJJX/img/icon-awesome-apple.svg"
              />
            </div>
          </div>
          <p className={classes.alreadyHaveAn}>
            <span className={classes.span}>
              Already have an account?&nbsp;&nbsp;
            </span>
            <span className={classes.textWrapper2}>Sign In</span>
          </p>
        </div>
        <div className={classes.form2}>
          <div className={classes.textWrapper3}>Create Account</div>
          <div className={classes.frame}>
            <div className={classes.form3}>
              <Form
                className={classes.formInstance}
                emailAddressClassName={classes.form4}
                formClassName={classes.designComponentInstanceNode}
                imput="name"
                phUser="user.svg"
                phUserClassName={classes.form5}
              />
              <Form
                className={classes.formInstance}
                emailAddressClassName={classes.form4}
                formClassName={classes.designComponentInstanceNode}
                icOutlineEmail="envelope.svg"
                imput="email"
                phUserClassName={classes.form5}
              />
              <Form
                className={classes.formInstance}
                emailAddressClassName={classes.form4}
                formClassName={classes.form6}
                iconamoonEyeOff="lock.svg"
                imput="password"
                phUserClassName={classes.form5}
              />
            </div>
            <div className={classes.privacyPolicy}>
              <img
                className={classes.tickSquare}
                alt="Tick square"
                src="checkbox.svg"
              />
              <p className={classes.iAcceptTheTerms}>
                <span className={classes.textWrapper4}>I accept the </span>
                <span className={classes.textWrapper5}>terms of use</span>
                <span className={classes.textWrapper4}> and </span>
                <span className={classes.textWrapper5}>privacy policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;

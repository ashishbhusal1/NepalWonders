import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import classes from "./LoginPage.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      // Perform login logic here
      console.log("Login values:", values);
    },
  });

  return (
    <div className={classes.container}>
      <div className={classes.div}>
        <img className={classes.rectangle} alt="Rectangle" src="girl.png" />
        <div className={classes.overlap}>
          <div className={classes.group}>
            <div className={classes.textWrapper}>Forgot your password?</div>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
              <div className={classes.overlapGroupWrapper}>
                <div className={classes.overlapGroup}>
                  <div className={classes.login}>
                    <button type="submit">Login</button>
                  </div>
                </div>
              </div>
              <div className={classes.overlapWrapper}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={classes.envelope}
                />

                <div className={classes.overlap2}>
                  <div className={classes.group2}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  <div className={classes.divWrapper}>
                    <div className={classes.overlapGroup2}>
                      <div className={classes.textWrapper3}>Email Id</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.group3}>
                <div className={classes.overlap2}>
                  <FontAwesomeIcon icon={faLock} className={classes.lock} />
                  <div className={classes.group4}>
                    <div className={classes.overlapGroup3}>
                      <div className={classes.textWrapper3}>Password</div>
                    </div>
                  </div>
                  <div className={classes.group5}>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className={classes.groupWrapper}>
              <div className={classes.group6}>
                <div className={classes.overlapGroup4}>
                  <img
                    className={classes.subtract}
                    alt="Subtract"
                    src="https://c.animaapp.com/j9rvoJJX/img/subtract.svg"
                  />
                  <div className={classes.textWrapper4}>OR</div>
                </div>
              </div>
            </div>
            <div className={classes.group7}>
              <p className={classes.dontHaveAccount}>
                <span className={classes.span}>Don’t have account? </span>
                <span className={classes.textWrapper5}>Register Now</span>
              </p>
              <div className={classes.googleLogoWrapper}>
                <img
                  className={classes.googleLogo}
                  alt="Google g logo"
                  src="https://c.animaapp.com/j9rvoJJX/img/google--g--logo@2x.png"
                />
              </div>
              <div className={classes.XMLIDwrapper}>
                <img
                  className={classes.XMLID}
                  alt="Xmlid"
                  src="https://c.animaapp.com/j9rvoJJX/img/xmlid-17-@2x.png"
                />
              </div>
              <div className={classes.iconAwesomeAppleWrapper}>
                <img
                  className={classes.iconAwesomeApple}
                  alt="Icon awesome apple"
                  src="https://c.animaapp.com/j9rvoJJX/img/icon-awesome-apple.svg"
                />
              </div>
            </div>
            <div className={classes.group8}>
              <div className={classes.textWrapper6}>Welcome</div>
              <div className={classes.textWrapper7}>Login with Email</div>
            </div>
          </div>
          <img
            className={classes.rhino}
            alt="Untitled design"
            src="https://c.animaapp.com/j9rvoJJX/img/untitled-design-7-1@2x.png"
          />
          <img
            className={classes.flower}
            alt="Untitled design"
            src="https://c.animaapp.com/j9rvoJJX/img/untitled-design-8-1@2x.png"
          />
        </div>
        <img
          className={classes.vector}
          alt="Vector"
          src="https://c.animaapp.com/j9rvoJJX/img/vector.svg"
        />
      </div>
    </div>
  );
};

export default LoginPage;

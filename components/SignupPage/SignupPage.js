import React from "react";
import classes from "./SignupPage.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock ,faUser} from "@fortawesome/free-solid-svg-icons";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
});

const SignupPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // Perform login logic here
      console.log("Signup values:", values);
    },
  });

  return (
    <div className={classes.SignupPage}>
      <div className={classes.div}>
        <img className={classes.rectangle} alt="Rectangle" src="girl.png" />
        <div className={classes.overlap}>
          <div className={classes.group}>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
              <div className={classes.overlapGroupWrapper}>
                <div className={classes.overlapGroup}>
                  <div className={classes.signup}>
                    <button type="submit">Signup</button>
                  </div>
                </div>
              </div>
              <div className={classes.overlap2}>
                <div className={classes.overlapWrapper}>
                  <FontAwesomeIcon icon={faUser} className={classes.user} />
                  <div className={classes.overlap3}>
                    <div className={classes.rectangle2} />
                    <div className={classes.group2}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                    </div>
                    <div className={classes.divWrapper}>
                      <div className={classes.overlapGroup2}>
                        <div className={classes.textWrapper3}>Name</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.group3}>
                    <FontAwesomeIcon icon={faLock} className={classes.lock} />
                  <div className={classes.overlap3}>
                    <div className={classes.rectangle2} />
                    <div className={classes.group4}>
                      <div className={classes.overlapGroup3}>
                        <div className={classes.textWrapper4}>Password</div>
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
                <div className={classes.group6}>
                  <div className={classes.signup}>Welcome</div>
                  <div className={classes.signupWithEmail}>
                    Signup with Email
                  </div>
                </div>
                <div className={classes.group7}>
                  <div className={classes.overlap3}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={classes.envelope}
                    />
                    <div className={classes.rectangle2} />
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
              </div>
            </form>
            <div className={classes.groupWrapper}>
              <div className={classes.group8}>
                <div className={classes.overlapGroup4}>
                  <img
                    className={classes.subtract}
                    alt="Subtract"
                    src="https://c.animaapp.com/j9rvoJJX/img/subtract.svg"
                  />
                  <div className={classes.textWrapper5}>OR</div>
                </div>
              </div>
            </div>
            <div className={classes.group9}>
              <p className={classes.dontHaveAccount}>
                <span className={classes.span}>Already have an account? </span>
                <span className={classes.textWrapper6}>Login</span>
              </p>
              <div className={classes.googleLogoWrapper}>
                <img
                  className={classes.googleLogo}
                  alt="Google g logo"
                  src="https://c.animaapp.com/j9rvoJJX/img/google--g--logo@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className={classes.vector}
            alt="Vector"
            src="https://c.animaapp.com/j9rvoJJX/img/vector.svg"
          />
          <img
            className={classes.untitledDesign}
            alt="Untitled design"
            src="https://c.animaapp.com/j9rvoJJX/img/untitled-design-7-1@2x.png"
          />
          <img
            className={classes.untitledDesign2}
            alt="Untitled design"
            src="https://c.animaapp.com/j9rvoJJX/img/untitled-design-8-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
export default SignupPage;

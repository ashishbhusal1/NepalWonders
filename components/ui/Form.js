import PropTypes from "prop-types";
import React from "react";
import classes from "./Form.module.css";

export const Form = ({
  imput,
  className,
  formClassName,
  emailAddressClassName,
  phUserClassName,
  phUser = "https://c.animaapp.com/pCtnzKfG/img/ph-user.svg",
  icOutlineEmail = "https://c.animaapp.com/pCtnzKfG/img/ic-outline-email-2.svg",
  iconamoonEyeOff = "https://c.animaapp.com/pCtnzKfG/img/iconamoon-eye-off-duotone-2.svg",
}) => {
  return (
    <div className={classes.form}>
      <div className={classes.div}>
        <div className={classes.fullName}>
          {imput === "name" && <>Full Name</>}

          {imput === "email" && <>Email Address</>}

          {imput === "password" && <>Password</>}
        </div>
        <img
          className={classes.phUser}
          alt="Ph user"
          src={
            imput === "email"
              ? icOutlineEmail
              : imput === "password"
              ? iconamoonEyeOff
              : phUser
          }
        />
      </div>
    </div>
  );
};

Form.propTypes = {
  imput: PropTypes.oneOf(["password", "name", "email"]),
  phUser: PropTypes.string,
  icOutlineEmail: PropTypes.string,
  iconamoonEyeOff: PropTypes.string,
};

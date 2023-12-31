import PropTypes from "prop-types";
import React, { useState } from "react";
import classes from "./Form.module.css";

export const Form = ({
  input,
  className,
  formClassName,
  emailAddressClassName,
  phUserClassName,
  phUser = "https://c.animaapp.com/pCtnzKfG/img/ph-user.svg",
  icOutlineEmail = "https://c.animaapp.com/pCtnzKfG/img/ic-outline-email-2.svg",
  iconamoonEyeOff = "https://c.animaapp.com/pCtnzKfG/img/iconamoon-eye-off-duotone-2.svg",
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (input === "name" && !formData.name.trim()) {
      validationErrors.name = 'Full Name is required';
    }

    if (input === "email" && !formData.email.trim()) {
      validationErrors.email = 'Email Address is required';
    } else if (input === "email" && !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (input === "password" && !formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  return (
    <div className={classes.form}>
      <div className={classes.div}>
        <div className={classes.fullName}>
          {input === "name" && <>Full Name</>}
          {input === "email" && <>Email Address</>}
          {input === "password" && <>Password</>}
        </div>
        <input
          type={input === "password" ? "password" : "text"}
          id={input}
          name={input}
          value={formData[input]}
          onChange={handleChange}
          className={classes.inputStyle}
        />
        {errors[input] && <span>{errors[input]}</span>}
        <img
          className={classes.phUser}
          alt="Ph user"
          src={
            input === "email"
              ? icOutlineEmail
              : input === "password"
              ? iconamoonEyeOff
              : phUser
          }
        />
      </div>
    </div>
  );
};

Form.propTypes = {
  input: PropTypes.oneOf(["password", "name", "email"]),
  phUser: PropTypes.string,
  icOutlineEmail: PropTypes.string,
  iconamoonEyeOff: PropTypes.string,
};

import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";
import registerImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const checkUsernameExists = async (username) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/check-username`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const result = await res.json();
      return result.exists;
    } catch (error) {
      console.error("Error checking username:", error);
      return false;
    }
  };


  const handleChange = async (e) => {
    const { id, value } = e.target;
    let isValid = true;

    if (id === "username") {
      const exists = await checkUsernameExists(value);
      setUsernameError(exists);
      isValid = !exists;
    } else if (id === "email") {
      isValid = /\S+@\S+\.\S+/.test(value);
      setEmailError(!isValid);
    } else if (id === "password") {
      isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
      setPasswordError(!isValid);
    }

    if (isValid) {
      setCredentials((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"
                      onChange={handleChange}
                      required
                      style={{ border: usernameError ? "1px solid red" : "" }}
                    />
                    {usernameError && (
                      <span style={{fontSize:'13px', color:'red'}}>
                        Username already exists. Please choose another one.
                      </span>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                      style={{ border: emailError ? "1px solid red" : "" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      required
                      pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
                      title="Password must be at least 8 characters long and contain at least one letter and one digit."
                      style={{ border: passwordError ? "1px solid red" : "" }}
                    />
                  </FormGroup>

                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;

import React, { useState } from "react";
import { Card, Form, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/store/actions/loginAction";
import { toast } from "react-toastify";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loding, setLoding] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [validEmailError, setValidEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  const isEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (!email) {
      setEmailError(true);
      return false;
    } else if (!isEmail(email)) {
      setValidEmailError(true);
      return false;
    } else if (!password) {
      setPasswordError(true);
      return false;
    } else {
      return true;
    }
  };

  const handleForm = () => {
    setEmailError(false);
    setValidEmailError(false);
    setPasswordError(false);
    if (validateForm()) {
      const payload = {
        email: email,
        password: password,
      };
      setLoding(true);
      dispatch(login(payload, callBackConfirmation));
    }
  };

  const callBackConfirmation = (response) => {
    if (response && response.status === 200) {
      if (response.data.userType === 1) {
        toast.success("login successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoding(false);
        window.location.href = "/admin";
      } else {
        toast.success("login successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoding(false);
        window.location.href = "/main-page";
      }
    } else {
      toast.error("something go wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoding(false);
    }
  };

  return (
    <div className="loginCard">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {(emailError || validEmailError) && (
                <Alert variant="danger">Invalid Email!</Alert>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <Alert variant="danger">Invalid Password!</Alert>
              )}
            </Form.Group>
            <p>
              Click for <Link to="/singup">Singup</Link>?
            </p>
            {loding ? (
              <Button variant="dark" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            ) : (
              <Button variant="dark" onClick={() => handleForm()}>
                Submit
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

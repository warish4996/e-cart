import React, { useState } from "react";
import { Form, Button, Col, Card, Row, Spinner, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/store/actions/singUpAction";
import { toast } from "react-toastify";

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loding, setLoding] = useState(false);
  const [password, setPassword] = useState("");
  const [Admin, setAdminType] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [validEmailError, setValidEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  const isEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (!firstName) {
      setFirstNameError(true);
      return false;
    } else if (!lastName) {
      setLastNameError(true);
      return false;
    } else if (!email) {
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
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setValidEmailError(false);
    setPasswordError(false);
    if (validateForm()) {
      let userType = null;
      if (Admin === true) {
        userType = 1;
      } else {
        userType = 2;
      }
      const payload = {
        name: `${firstName}${" "}${lastName}`,
        email: email,
        password: password,
        userType: userType,
      };
      dispatch(signUp(payload, callBackConfirmation));
      setLoding(true);
    }
  };

  const callBackConfirmation = (response) => {
    if (response && response.status === 200) {
      toast.success("signUp successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoding(false);
      window.location.href = "/login";
    } else {
      setLoding(false);
      toast.error("Something go wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="singupCard">
      <Card style={{ width: "60rem" }}>
        <Card.Body>
          <Card.Title>Sing Up</Card.Title>
          <Form>
            <Form>
              <Row>
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {firstNameError && (
                    <Alert variant="danger">First name is required!</Alert>
                  )}
                </Col>
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {lastNameError && (
                    <Alert variant="danger">Last name is required!</Alert>
                  )}
                </Col>
              </Row>
            </Form>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {(emailError || validEmailError) && (
                <Alert variant="danger">Invalid Email!</Alert>
              )}
            </Form.Group>

            <Form.Group controlId="formGridPassword">
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

            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out if you are singup for Admin!"
                onChange={(e) => setAdminType(!Admin)}
              />
            </Form.Group>

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

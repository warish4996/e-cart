import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => {
  const urlSetter = window.location.href.split("/");
  const lastValue = urlSetter[urlSetter.length - 1];
  const [openLogin, setOpenLogin] = useState(false);
  let admin = false;
  let cart = false;
  let singup = false;
  let order = false;
  let login = false;


  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("login"))) {
      setOpenLogin(true);
    } else {
      setOpenLogin(false);
    }
  }, [openLogin]);

  if (lastValue === "admin" || lastValue === "admin#") {
    admin = true;
  } else {
    admin = false;
  }

  if (lastValue === "cart" || lastValue === "cart#") {
    cart = true;
  } else {
    cart = false;
  }

  if (lastValue === "singup" || lastValue === "singup#") {
    singup = true;
  } else {
    singup = false;
  }

  if (lastValue === "order" || lastValue === "order#") {
    order = true;
  } else {
    order = false;
  }

  if (lastValue === "login" || lastValue === "login#") {
    login = true;
  } else {
    login = false;
  }

  const mainPage = lastValue === "main-page" || lastValue === "main-page#";

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ToastContainer />
        <Navbar.Brand href="#">
          <img
            alt="logo"
            src={logo}
            width="35"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Shop-Online
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {(order || mainPage) && openLogin && (
              <Nav.Link href="/cart">Cart</Nav.Link>
            )}
            {(cart || mainPage) && openLogin && (
              <Nav.Link eventKey={2} href="/order">
                Order
              </Nav.Link>
            )}
            {login && (
              <Nav.Link eventKey={3} href="/singup">
                sing up
              </Nav.Link>
            )}
            {!openLogin ? (
              <>
                {(singup || mainPage) && (
                  <Nav.Link eventKey={3} href="/login">
                    Login
                  </Nav.Link>
                )}
              </>
            ) : (
              <>
                {(admin || cart || order || mainPage) && (
                  <Nav.Link
                    eventKey={3}
                    onClick={() => {
                      window.location.href = "/main-page";
                      localStorage.removeItem("persist:root");
                      localStorage.clear();
                    }}
                  >
                    Logout
                  </Nav.Link>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

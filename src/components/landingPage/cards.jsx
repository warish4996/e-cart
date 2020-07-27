import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../redux/store/actions/allProductAction";
import { addCart } from "../../redux/store/actions/cartAction";
import { FaCartArrowDown } from "react-icons/fa";
import { toast } from "react-toastify";

export default () => {
  const Product =
    useSelector((state) => state.productReducer.product).products || [];

  const dispatch = useDispatch();
  let Login = false;

  if (JSON.parse(window.localStorage.getItem("login"))) {
    Login = true;
  } else {
    Login = false;
  }

  useEffect(() => {
    dispatch(allProduct());
  }, []);

  const addToCart = (userID) => {
    dispatch(addCart(userID, callBackConfirmation));
  };

  const callBackConfirmation = (response) => {
    if (response && response.status === 200) {
      toast.success("product is added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    }
  };

  return (
    <>
      <div className="productCart">
        {!Product.length > 0 ? (
          <Spinner
            style={{ marginTop: "30px", fontSize: "30px" }}
            animation="border"
            variant="dark"
          />
        ) : (
          ""
        )}
        {Product.map((res) => (
          <Card style={{ width: "18rem", marginTop: "30px" }}>
            <Card.Img
              variant="top"
              src={res.image}
              style={{ width: "17.85rem", height: "12rem" }}
            />

            <Card.Body>
              <Card.Title style={{cursor:'default'}}>{res.name}</Card.Title>
              <div className="cardIcon">
                <h6 style={{cursor:'default'}}>Price:{res.price}</h6>
                {Login && (
                  <FaCartArrowDown onClick={() => addToCart(res._id)} />
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

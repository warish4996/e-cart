import React, { useEffect } from "react";
import { Card, Button, Table } from "react-bootstrap";
import CartRightSide from "./cartRightSide";
import {
  fetchCart,
  removeCartProduct,
} from "../../redux/store/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

export default () => {
  const CartItems = useSelector((state) => state.cartReducer.fetchCart) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const RemoveProduct = (userId) => {
    dispatch(removeCartProduct(userId, callBackConfirmation));
  };

  const callBackConfirmation = (response) => {
    if (response && response.status === 200) {
      toast.success("Product removed successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(fetchCart());
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
    <div className="upperCart">
      <div className="cartStyle">
        <Card>
          <Card.Header as="h5">Cart</Card.Header>
          <Card.Body>
            {CartItems.length > 0 ? (
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {CartItems.map((res, index) =>
                    res === null ? (
                      ""
                    ) : (
                      <tr key={res._id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={res.productId.image}
                            art="img"
                            style={{ height: "50px" }}
                          />
                        </td>
                        <td>{res.quantity}</td>
                        <td>{res.productId.name}</td>
                        <td>{res.productId.price}</td>
                        <td>
                          <RiDeleteBin6Line
                            onClick={() => RemoveProduct(res.productId._id)}
                          />
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            ) : (
              <Card.Text>
                <b>Cart is empty</b>
              </Card.Text>
            )}
            <Button
              variant="dark"
              onClick={() => (window.location.href = "/main-page")}
            >
              Continue Shopping
            </Button>
          </Card.Body>
        </Card>
      </div>
      <CartRightSide cartItem={CartItems} />
    </div>
  );
};

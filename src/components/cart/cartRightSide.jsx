import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { orderMaking } from "../../redux/store/actions/orderAction";
import { toast } from "react-toastify";

export default ({ cartItem }) => {
  const dispatch = useDispatch();

  const callBackConfirmation = (response) => {
    if (response && response.status === 200) {
      toast.success("order successful!", {
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
    <div className="cards">
      <div className="containerCard">
        <h4>
          <b>Subtotal ({cartItem.length} Item) : </b>
          Rs.{cartItem.reduce((a, c) => a + c.productId.price * c.quantity, 0)}
        </h4>
        {cartItem.length === 0 ? (
          <Button variant="dark" disabled>
            Place order
          </Button>
        ) : (
          <Button
            variant="dark"
            onClick={() => dispatch(orderMaking(callBackConfirmation))}
          >
            Place order
          </Button>
        )}
      </div>
    </div>
  );
};

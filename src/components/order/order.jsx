import React, { useEffect } from "react";
import { Card, Button, Table } from "react-bootstrap";
import { orderFetch } from "../../redux/store/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const OrderList =
    useSelector((state) => state.orderFetchReducer.orderFetch).data || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderFetch());
  }, []);

  return (
    <div className="orderTable">
      <Card>
        <Card.Header as="h5">Order List</Card.Header>
        <Card.Body>
          {OrderList.length <= 0 && <Card.Text>
                <b>Order list is empty</b>
              </Card.Text>}
          {OrderList.map((res) =>
            res.products.length > 0 ? (
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                  {res.products.map((res1, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={res1.product.image}
                          alt="img"
                          style={{ height: "50px" }}
                        />
                      </td>
                      <td>{res1.product.name}</td>
                      <td>{res1.quantity}</td>
                      <td>{res1.product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : ('')
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
  );
};

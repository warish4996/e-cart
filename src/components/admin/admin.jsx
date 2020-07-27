import React, { useEffect, useState } from "react";
import { Table, Card, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  adminProduct,
  removeAdminProduct,
  addAdminProduct,
  editAdminProduct,
} from "../../redux/store/actions/adminAction";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import AddModule from "./addModule";
import EditModule from "./editModule";
import { toast } from "react-toastify";

export default () => {
  const adminAllProduct =
    useSelector((state) => state.adminReducer.adminAllProduct) || [];
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [loding, setLoding] = useState(false);
  const [editingData, setEditingData] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);

  useEffect(() => {
    dispatch(adminProduct());
  }, []);

  const RemoveProduct = (userId) => {
    dispatch(removeAdminProduct(userId, callBackConfirmation));
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
      dispatch(adminProduct());
    } else {
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

  const addProduct = (data) => {
    dispatch(addAdminProduct(data, callBackConfirmationAddProduct));
    setLoding(true);
  };

  const callBackConfirmationAddProduct = (response) => {
    if (response && response.status === 200) {
      toast.success("Product added successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoding(false);
      handleClose();
      dispatch(adminProduct());
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

  const editProductHandle = (data) => {
    dispatch(editAdminProduct(data, callBackConfirmationEditProduct));
    setLoding(true);
  };

  const callBackConfirmationEditProduct = (response) => {
    if (response && response.status === 200) {
      toast.success("Product edited successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoding(false);
      editHandleClose();
      dispatch(adminProduct());
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

  const EditProduct = (res) => {
    setEditingData(res);
    editHandleShow();
  };

  return (
    <>
      <div className="adminStyle">
        <div className="adminStyleInner">
          <Card>
            <Card.Header as="h5" style={{ height: "60px" }}>
              Featured
              <Button
                variant="dark"
                style={{ position: "absolute", right: "20px" }}
                onClick={handleShow}
              >
                Add Product
              </Button>
            </Card.Header>
            {adminAllProduct.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adminAllProduct.map((res, index) => (
                    <tr key={res._id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={res.image}
                          art="img"
                          style={{ height: "50px" }}
                        />
                      </td>
                      <td>{res.name}</td>
                      <td>{res.price}</td>
                      <td>
                        <RiDeleteBin6Line
                          onClick={() => RemoveProduct(res._id)}
                        />
                        <GrEdit
                          onClick={() => EditProduct(res)}
                          style={{ marginLeft: "20px" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Card.Text>
                <b>Product list is empty</b>
              </Card.Text>
            )}
          </Card>
        </div>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <AddModule
          close={handleClose}
          addProduct={(data) => addProduct(data)}
          loding={loding}
        />
      </Modal>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={editShow}
        onHide={editHandleClose}
      >
        <EditModule
          close={editHandleClose}
          res={editingData}
          loding={loding}
          editProduct={(data) => editProductHandle(data)}
        />
      </Modal>
    </>
  );
};

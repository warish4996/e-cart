import React, { useState } from "react";
import { Button, Modal, Form, Spinner, Alert } from "react-bootstrap";

export default ({ close, res, editProduct, loding }) => {
  const [productName, setProductName] = useState(res.name);
  const [description, setDescription] = useState(res.description);
  const [image, setImage] = useState(res.image);
  const [price, setPrice] = useState(res.price);
  const [productNameError, setProductNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  const validateForm = () => {
    if (!productName) {
      setProductNameError(true);
      return false;
    } else if (!description) {
      setDescriptionError(true);
      return false;
    } else if (!image) {
      setImageError(true);
      return false;
    } else if (!price) {
      setPriceError(true);
      return false;
    } else {
      return true;
    }
  };

  const productHandle = () => {
    setProductNameError(false);
    setDescriptionError(false);
    setImageError(false);
    setPriceError(false);
    if (validateForm()) {
      const data = {
        name: productName,
        price: price,
        description: description,
        image: image,
      };
      editProduct(data);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              type="input"
              placeholder="Product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            {productNameError && (
              <Alert variant="danger">Product Name is required!</Alert>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {descriptionError && (
              <Alert variant="danger">Description is required!</Alert>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="input"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {priceError && <Alert variant="danger">Price is required!</Alert>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="input"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            {imageError && <Alert variant="danger">Image is required!</Alert>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={close}>
          Close
        </Button>
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
          <Button variant="dark" onClick={productHandle}>
            Edit Product
          </Button>
        )}
      </Modal.Footer>
    </>
  );
};

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import "./AddEditModalWindow.css";

const AddEditModalWindow = ({ show, handleClose, editId }) => (
  <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editId ? "Edit product" : "Add product"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            category: ``,
            name: ``,
            quantity: ``,
            price: ``,
            description: ``,
          }}
        >
          <Form className="modal__form">
            <label htmlFor="category">Category</label>
            <Field
              className="form__field"
              id="category"
              name="category"
              placeholder="Category"
            />

            <label htmlFor="name">Name</label>
            <Field
              className="form__field"
              id="name"
              name="name"
              placeholder="Name"
            />

            <label htmlFor="quantity">Quantity</label>
            <Field
              className="form__field"
              id="quantity"
              name="quantity"
              placeholder="quantity"
              type="number"
            />
            <label htmlFor="price">Price</label>
            <Field
              className="form__field"
              id="price"
              name="price"
              placeholder="price"
            />
            <label htmlFor="description">Description</label>
            <Field
              className="form__field"
              id="description"
              name="description"
              placeholder="description"
              type="textarea"
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit" onClick={handleClose}>
                {editId ? "Save Changes" : "Add Product"}
              </Button>
            </Modal.Footer>
          </Form>
        </Formik>
      </Modal.Body>
    </Modal>
  </>
);

export default AddEditModalWindow;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import "./AddEditModalWindow.css";

const AddEditModalWindow = ({
  show,
  handleClose,
  editId,
  handleAddProduct,
  initialValues,
  editProduct,
}) => {
  const validateData = (value) => {
    let error;
    if (!value || !value.trim()) {
      error = "This field is required";
    }
    return error;
  };
  const validateQuantity = (value) => {
    let error;
    if (!value || value <= 0) {
      error = "This field can`t be less then 0";
    }
    return error;
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Edit product" : "Add product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              editId
                ? await editProduct(editId, values)
                : await handleAddProduct(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="modal__form">
                <label htmlFor="category">Category</label>
                <Field
                  className={
                    "form__field " +
                    (errors.category && touched.category ? "input__error" : "")
                  }
                  id="category"
                  name="category"
                  placeholder="Category"
                  validate={validateData}
                />
                {errors.category && touched.category && (
                  <div className="form__error">{errors.category}</div>
                )}
                <label htmlFor="name">Name</label>
                <Field
                  className={
                    "form__field " +
                    (errors.name && touched.name ? "input__error" : "")
                  }
                  id="name"
                  name="name"
                  placeholder="Name"
                  validate={validateData}
                />
                {errors.name && touched.name && (
                  <div className="form__error">{errors.name}</div>
                )}
                <label htmlFor="quantity">Quantity</label>
                <Field
                  className={
                    "form__field " +
                    (errors.quantity && touched.quantity ? "input__error" : "")
                  }
                  id="quantity"
                  name="quantity"
                  placeholder="quantity"
                  type="number"
                  validate={validateQuantity}
                />
                {errors.quantity && touched.quantity && (
                  <div className="form__error">{errors.quantity}</div>
                )}
                <label htmlFor="price">Price</label>
                <Field
                  className={
                    "form__field " +
                    (errors.price && touched.price ? "input__error" : "")
                  }
                  id="price"
                  type="number"
                  name="price"
                  placeholder="price"
                  validate={validateQuantity}
                />
                {errors.price && touched.price && (
                  <div className="form__error">{errors.price}</div>
                )}
                <label htmlFor="description">Description</label>
                <Field
                  className={
                    "form__field " +
                    (errors.productDescription && touched.productDescription
                      ? "input__error"
                      : "")
                  }
                  id="description"
                  name="productDescription"
                  placeholder="description"
                  type="textarea"
                  validate={validateData}
                />{" "}
                {errors.productDescription && touched.productDescription && (
                  <div className="form__error">{errors.productDescription}</div>
                )}
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="success" type="submit">
                    {editId ? "Save Changes" : "Add Product"}
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddEditModalWindow;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalWindowDeleteItem = ({
  show,
  handleClose,
  item,
  handleDeleteItem,
}) => (
  <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ви впевнені, що хочете видалити цей товар?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Відміна
        </Button>
        <Button onClick={() => handleDeleteItem(item.id)} variant="primary">
          Підтвердити видалення
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);

export default ModalWindowDeleteItem;

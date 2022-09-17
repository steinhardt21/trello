import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const ModalCreateBoard = ({show, onHide, boards, addBoard}) => {
  return (
    <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create new board
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insert title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  )
}

PropTypes.ModalCreateBoard = {
  onHide: PropTypes.func,
  boards: PropTypes.object,
  addBoard: PropTypes.func,
  show: PropTypes.bool
}

export default ModalCreateBoard

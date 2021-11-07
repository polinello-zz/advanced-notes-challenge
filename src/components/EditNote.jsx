/* Questo componente mostra una text area di input dove inserire la nota
 e un pulsante per pubblicare la nota */
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
const EditNote = props => {
  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit(event.target.editNote.value);
  };
  return (
    <Row className="p-2" style={{ background: "#eff2f7", opacity: 1 }}>
      <form onSubmit={handleSubmit}>
        <Row>
          <textarea id="input-note" name="editNote" />
        </Row>
        <Row>
          <Col>
            <Button
              className="m-2"
              style={{ float: "right" }}
              type="submit"
              variant="danger"
            >
              Publish
            </Button>
          </Col>
        </Row>
      </form>
    </Row>
  );
};

export default EditNote;

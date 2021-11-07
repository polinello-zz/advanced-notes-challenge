/* Compomente che gestisce la visualizzazione delle note pubblicate dall'utente collegato*/
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import ReadMore from "./ReadMore";

const UserNote = props => {
  console.log("len", props.note.note.length);
  return (
    <Row className="mb-3">
      <Col xs="auto" className="order-2 pt-4">
        <Image src={props.note.avatar} width="30" height="30" roundedCircle />
      </Col>
      <Col className="order-1">
        <Row className="justify-content-end">
          <Col xs={5}>
            <span style={{ fontSize: 12, color: "slategrey" }}>
              {props.note.date}
            </span>
          </Col>
          <Col className="text-end" xs={5}>
            <h6>You</h6>
          </Col>
          <Col className="user-note" xs={10}>
            {props.note.note.length > 250 ? (
              <ReadMore>{props.note.note}</ReadMore>
            ) : (
              <div>{props.note.note}</div>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserNote;

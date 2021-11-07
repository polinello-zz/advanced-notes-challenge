/* Compomente che gestisce la visualizzazione delle note pubblicate dagli altri utenti*/
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import ReadMore from "./ReadMore";

const OtherNote = props => {
  return (
    <Row className="mb-3">
      <Col xs="auto" className="pt-4">
        <Image src={props.note.avatar} width="30" height="30" roundedCircle />
      </Col>
      <Col>
        <Row>
          <Col xs={5}>
            <h6>{props.note.username}</h6>
          </Col>
          <Col className="text-end" xs={5}>
            <span style={{ fontSize: 12, color: "slategrey" }}>
              {props.note.date}
            </span>
          </Col>
          <Col className="other-note" xs={10}>
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

export default OtherNote;

import React, { useState, useEffect } from "react";
import EditNote from "./components/EditNote";
import UserNote from "./components/UserNote";
import OtherNote from "./components/OtherNote";
import SwitchComponent from "./components/SwitchComponent";

import { Container, Row, Col } from "react-bootstrap";
function App() {
  const [notes, setNotes] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [onlyPeopleFilter, setOnlyPeopleFilter] = useState(false);

  /* metodo che restituisce i dati circa le note degli altri utenti */
  const getData = () => {
    var localNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    if (!localNotes || localNotes.length === 0)
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setNotes(myJson);
        });
    else setNotes(localNotes);
  };

  /* metodo che restituisce i dati circa le info dell'utente collegato */
  const getUserInfo = () => {
    fetch("user-info.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setUserInfo(myJson);
      });
  };

  /* metodo che crea una nuova nota dell'utente e la salva nel local storage */
  const addUserNote = note => {
    var m = new Date();
    var today =
      m.getUTCFullYear() +
      "-" +
      ("0" + (m.getUTCMonth() + 1)).slice(-2) +
      "-" +
      ("0" + m.getUTCDate()).slice(-2) +
      " " +
      ("0" + m.getUTCHours()).slice(-2) +
      ":" +
      ("0" + m.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + m.getUTCSeconds()).slice(-2);

    let newNote = {
      username: userInfo.username,
      date: today,
      note: note,
      avatar: userInfo.avatar
    };
    let updateNotes = [...notes];
    updateNotes.push(newNote);
    updateNotes.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    setNotes(updateNotes);
    localStorage.setItem("notes", JSON.stringify(updateNotes));
  };

  useEffect(() => {
    getData();
    getUserInfo();
  }, []);

  return (
    <div>
      <Container>
        <Row className="m-2">
          {notes &&
            notes.length > 0 &&
            notes.map((item, index) =>
              item.username === userInfo.username ? (
                <div key={"y-" + index} hidden={onlyPeopleFilter}>
                  <UserNote className="m-2" note={item}></UserNote>
                </div>
              ) : (
                <div key={"x-" + index}>
                  <OtherNote className="m-2" note={item}></OtherNote>
                </div>
              )
            )}
        </Row>
        <Row className="m-2">
          <Col>
            <SwitchComponent
              title="Only People Notes"
              value={onlyPeopleFilter}
              onChange={setOnlyPeopleFilter}
            ></SwitchComponent>
          </Col>
        </Row>
        <Row>
          <Col>
            <EditNote onSubmit={addUserNote}></EditNote>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;

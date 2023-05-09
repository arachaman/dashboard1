import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Container,
  Modal,
  Row,
  Col,
  Dropdown,
  Form,
} from "react-bootstrap";

const Filter = () => {
  const [year, setYear] = useState([]);

  useEffect(() => {
    const d = new Date();
    var temp = [];
    for (var i = 2019; i <= d.getFullYear(); i++) {
      temp.push(i);
    }
    setYear(temp);
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container>
        <div>
          <Button variant="success" onClick={handleShow}>
            <FontAwesomeIcon icon={faFilter} />
            Filter
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Filter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs={6} md={4}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Januari</option>
                      <option>Februari</option>
                      <option>Maret</option>
                      <option>April</option>
                      <option>Mei</option>
                      <option>Juni</option>
                      <option>Juli</option>
                      <option>Agustus</option>
                      <option>September</option>
                      <option>Oktober</option>
                      <option>November</option>
                      <option>Desember</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      {year.map(function (item, i) {
                        console.log("test");
                        return <option href="#/action-1">{item}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={6} md={4} className="ms-1">
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Hendra</option>
                      <option>Joko</option>
                      <option>Alver</option>
                      <option>Rama</option>
                      <option>Panji</option>
                      <option>Abdul</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Filter
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Filter;

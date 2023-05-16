import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const FilterForm = () => {
  const [year, setYear] = useState([]);

  useEffect(() => {
    const d = new Date();
    var temp = [];
    for (var i = 2019; i <= d.getFullYear(); i++) {
      temp.push(i);
    }
    setYear(temp);
  }, []);
  return (
    <div>
      <section>
        <Row>
          {/* <Col md={{ span: 3, offset: 1 }}>
            <div>
              <Form>
                <Form.Group
                  className="mb-3 text-center"
                  controlId="formBasicEmail"
                >
                  <Form.Select>
                    <option>Hendra</option>
                    <option>Joko</option>
                    <option>Alver</option>
                    <option>Rama</option>
                    <option>Panji</option>
                    <option>Abdul</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </div>
          </Col> */}
          <Col xs={6} md={{ span: 2, offset: 4 }}>
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
          <Col xs={6} md={2}>
            <Form.Group className="mb-3">
              <Form.Select>
                {year.map(function (item, i) {
                  return (
                    <option href="#/action-1" key={i}>
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Button>Choose</Button>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default FilterForm;

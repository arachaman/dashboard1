import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Chart from "./TotalperPersonChart";
import MonthlyTickets from "./MonthlyTickets";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const ITPersonnel = () => {
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
      <Navigation />
      <Container>
        <section>
          <div className="my-5 text-center">
            <h1>Chart</h1>
          </div>
        </section>
        <section>
          <Chart />
        </section>
        <section className="mt-4">
          <MonthlyTickets />
        </section>
        <section>
          <Row>
            <Col md={{ span: 4 }}>
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
            </Col>
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
            <Col xs={6} md={4}>
              <Form.Group className="mb-3">
                <Form.Select>
                  {year.map(function (item, i) {
                    return <option href="#/action-1">{item}</option>;
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button className="mt-3">Choose</Button>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default ITPersonnel;

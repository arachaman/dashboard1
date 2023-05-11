import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Filter from "./Filter";
import data from "../../utils/data.json";

const TicketsPanel = () => {
  const count = data.length;
  const rs = data.filter((p) => p.Status === "Resolved");
  const countrs = rs.length;
  const op = data.filter((p) => p.Status === "On Progress");
  const countop = op.length;
  const as = data.filter((p) => p.Status === "Assigned");
  const countas = as.length;
  const cl = data.filter((p) => p.Status === "Closed");
  const countcl = cl.length;
  console.log(op);
  return (
    <div>
      <Container>
        <Row className="ms-5 ">
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{count}</h1>
            <p>Ticket Total</p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{countrs}</h1>
            <p>Resolved </p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{countop}</h1>
            <p>On Progress </p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{countas}</h1>
            <p>Assigned </p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{countcl}</h1>
            <p>Closed </p>
          </Col>
          <Col>
            {/* <div md={{ span: 2, offset: 4 }}>
              <Filter />
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicketsPanel;

import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Filter from "./FilterModal";
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
  const rg = data.filter((p) => p.Status === "Closed");
  const countrg = rg.length;
  console.log(op);
  return (
    <div>
      <Container>
        <h1 className="text-center mt-4">Total Tickets</h1>
        <Row className="mb-2 mt-4">
          <Col
            md={{ span: 2, offset: 3 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{count}</h1>
            <p>Ticket Total</p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{countrg}</h1>
            <p>Registered</p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{countrs}</h1>
            <p>Resolved </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col
            md={{ span: 2, offset: 3 }}
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
        </Row>
        {/* <Col>
            {/* <div md={{ span: 2, offset: 4 }}>
              <Filter />
            </div> */}
        {/* </Col> */}
      </Container>
    </div>
  );
};

export default TicketsPanel;

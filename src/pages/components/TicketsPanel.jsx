import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const TicketsPanel = (props) => {
  const totalTicket = props.dataChart.Total_Ticket;
  const registered = props.dataChart.Registered;
  const resolved = props.dataChart.Resolved;
  const onProgress = props.dataChart.On_Progress;
  const assigned = props.dataChart.Assigned;
  const closed = props.dataChart.Closed;
  const notResolved = props.dataChart.Not_Resolved;

  return (
    <div>
      <Container>
        <Row>
          <div>
            <Col
              md={{ span: 6, offset: 3 }}
              className="border border-3 border-success rounded-pill text-center"
            >
              <h1>{totalTicket}</h1>
              <p>Ticket Total</p>
            </Col>
          </div>
        </Row>
        <Row className="mb-2 mt-4">
          <Col
            md={{ span: 2, offset: 3 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{registered}</h1>
            <p>Registered</p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{resolved}</h1>
            <p>Resolved </p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{onProgress}</h1>
            <p>On Progress </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col
            md={{ span: 2, offset: 3 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{assigned}</h1>
            <p>Assigned </p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{closed}</h1>
            <p>Closed </p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>{notResolved}</h1>
            <p>Not Resolved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicketsPanel;

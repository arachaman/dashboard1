import React from "react";
import { useState, useEffect } from "react";
import style from "../css/panel.css";
import { Row, Col, Container, Dropdown } from "react-bootstrap";
import Filter from "./Filter";

const TicketsPanel = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>2</h1>
            <p>Ticket Total</p>
          </Col>
          <Col
            md={{ span: 2 }}
            className="border border-3 border-success rounded-pill ps-4 me-3"
          >
            <h1>2</h1>
            <p>On going ticket</p>
          </Col>
          <Col>
            <div md={{ span: 2, offset: 4 }}>
              <Filter />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicketsPanel;

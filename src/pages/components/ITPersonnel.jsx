import React from "react";
import Navigation from "./Navigation";
import { Container, Form } from "react-bootstrap";

const ITPersonnel = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <section>
          <div className="my-5 text-center">
            <h1>IT Personnel</h1>
          </div>
        </section>
        <section>
          <div md={{ span: 4, offset: 4 }}>
            <Form.Group className="mb-3 text-center">
              <Form.Label>Choose Personnel</Form.Label>
              <Form.Select>
                <option>Hendra</option>
                <option>Joko</option>
                <option>Alver</option>
                <option>Rama</option>
                <option>Panji</option>
                <option>Abdul</option>
              </Form.Select>
            </Form.Group>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ITPersonnel;

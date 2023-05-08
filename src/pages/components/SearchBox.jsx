import React, {useState} from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap'

const SearchBox = () => {
  return (
    <div>
      <Row>
        <Col md={{span: 4, offset:8}}>
        <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBox
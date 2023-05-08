import React from 'react'
import style from '../css/panel.css'
import {Row, Col, Container} from 'react-bootstrap'

const TotalTicket = () => {
  return (
    <div >
      <Container>
        <Row>
          <Col md={{span: 2}} className='border border-3 border-success rounded-pill ps-4 me-3'>
            <h1>2</h1>
            <p>Ticket Total</p>
          </Col>
          <Col md={{span: 2}} className='border border-3 border-success rounded-pill ps-4'>
            <h1>2</h1>
            <p>On going ticket</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TotalTicket
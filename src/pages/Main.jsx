import React from "react";
import TicketsPanel from "./components/TicketsPanel";
import TicketChart from "./components/TicketChart";
import { Container, Row, Col } from "react-bootstrap";
import FilterChartMonthly from "./components/FilterForm";
import RateChart from './components/RateChart'

const Main = () => {
  return (
    <div>
      <section>
        <TicketsPanel />
      </section>
      <Container>
        {/* <section>
          <FilterChartMonthly />
        </section> */}
        <section className="mt-4">
          <Row>
            <Col>
              <TicketChart />
            </Col>
          </Row>
          <Row>
            <Col>
              <RateChart />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Main;

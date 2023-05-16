import React, { useState } from "react";
import TicketsPanel from "./components/TicketsPanel";
import TicketChart from "./components/TicketChart";
import { Container, Row, Col } from "react-bootstrap";
import FilterChartMonthly from "./components/FilterForm";
import RateChart from './components/RateChart'
import axios from '../redux/axios'

const Main = () => {
  const [responseData, setResponseData] = useState();


  const getData = async () => {
    const response = await axios
      .get(`dashboard/index`)
      .then((res) => {
        // setResponseData(res.data.data);
        console.log(res.data.data);

        var datasets = [];
        res.data.data.chart.map((row, index) => {
          datasets.push({
            label: row.Name,
            data: row.Ticket_Month_Count,
            backgroundColor: colorChart[index],
            key: index,
          });
        });
        console.log(datasets);
        setResponseData({ labels, datasets });
      })
      .catch((err) => {
        // Handle errors
        alert(err);
        console.error(err);
      });
  };
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
              <TicketChart datachart={responseData} />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <RateChart /> */}
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Main;

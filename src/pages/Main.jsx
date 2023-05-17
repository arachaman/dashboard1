import React, { useState, useEffect } from "react";
import TicketsPanel from "./components/TicketsPanel";
import TicketChart from "./components/TicketChart";
import { Container, Row, Col } from "react-bootstrap";
import FilterChartMonthly from "./components/FilterForm";
import RateChart from "./components/RateChart";
import FilterForm from "./components/FilterForm";
import axios from "../redux/axios";

const Main = () => {
  const [responseData, setResponseData] = useState();
  const [childData, setChildData] = useState('');

  const handleChildData = (data) => {
    setChildData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios
      .get(`dashboard/index`)
      .then((res) => {
        setResponseData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        // Handle errors
        alert(err);
        console.error(err);
      });
  };
  if (responseData == null) {
    return <div>loading</div>;
  }

  return (
    <div>
      <section>
        <FilterForm childProps={handleChildData} dataChart={responseData.chart}/>
      </section>
      <section>
        <TicketsPanel dataChart={responseData.chart}/>
      </section>
      <Container>
        <section className="mt-4">
          <Row>
            <Col>
              <TicketChart
                dataChart={responseData.chart}
              />
            </Col>
          </Row>
          <Row>
            <Col>{/* <RateChart /> */}</Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Main;

import React, { useState, useEffect, useRef } from "react";
import TicketsPanel from "./components/TicketsPanel";
import TicketChart from "./components/TicketChart";
import { Container, Row, Col } from "react-bootstrap";
/* eslint-disable */
import RateChart from "./components/RateChart";
import FilterForm from "./components/FilterForm";
import axios from "../redux/axios";
import "./css/main.css";

//get data from API

const Main = () => {
  const [filterDate, setFilterDate] = useState(null);
  const [responseData, setResponseData] = useState();
  const refMonth = useRef();
  const refYear = useRef();

  // console.log(responseData)

  const getData = async () => {
    const response = await axios
      .get(`dashboard/index`)
      .then((res) => {
        setResponseData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  };

  //kalo mau filter, panggil axiosnya lagi karena beda url
  const DatasetsFilterMonth = () => {
    var month = refMonth.current;
    var year = refYear.current;
    if (month !== "" || year !== "") {
      axios
        .get(`dashboard/chartFilter/${year}/${month}`)
        .then((res) => {
          setResponseData(res.data.data);
          setFilterDate([year, month]);
          // console.log(res.data.data);
        })
        // console.log(datasets);

        .catch((err) => {
          // Handle errors
          // alert(err);
          console.error(err);
        });
    } else {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [responseData]);

  if (responseData == null) {
    return <div>loading</div>;
  }

  return (
    <div>
      <section className="mt-4">
        <FilterForm
          dataChart={setResponseData}
          filterData={DatasetsFilterMonth()}
        />
      </section>
      <section>
        <TicketsPanel dataChart={responseData.panel} />
      </section>
      <Container>
        <div className='chartsize'>
          <section className="mt-4" >
            <Row>
              <Col>
                <TicketChart
                  dataChart={responseData.chart}
                  filter={filterDate}
                />
              </Col>
            </Row>
            <Row>
              <Col>{/* <RateChart /> */}</Col>
            </Row>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Main;

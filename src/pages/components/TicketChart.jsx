import React, { useState, useEffect, useRef } from "react";
import DataDashboard from "../../utils/DataDashboard.json";
import { InteractionItem } from "chart.js";
import { Row, Col, Form, Button } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Tickets",
    },
  },
};

function TicketChart() {
  const refMonth = useRef();
  const refYear = useRef();

  const [year, setYear] = useState([]);
  const [filter, setFilter] = useState({
    month: "",
    year: "",
  });

  useEffect(() => {
    const d = new Date();
    var temp = [];
    for (var i = 2019; i <= d.getFullYear(); i++) {
      temp.push(i);
    }
    setYear(temp);
  }, []);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const colorChart = [
    "red",
    "blue",
    "green",
    "black",
    "yellow",
    "orange",
    "gray",
    "aqua",
    "brown",
    "red",
    "blue",
    "green",
    "black",
    "yellow",
    "orange",
    "gray",
    "aqua",
    "brown",
  ];

  var datasets = [];
  DataDashboard.chart.map((row, index) => {
    datasets.push({
      label: row.Name,
      data: row.Ticket_Month_Count,
      backgroundColor: colorChart[index],
      key: index,
    });
  });

  const [datasetsState, setDatasetsState] = useState({ labels, datasets });

  useEffect(() => {
    fetchData();
  }, [datasetsState]);

  const fetchData = () => {};

  const datasetsFilterMonth = () => {
    var month = refMonth.current.value;
    var year = refYear.current.value;
    if (month !== "" || year !== "") {
      var datasets = [];
      DataDashboard.chart.map((row, index) => {
        datasets.push({
          label: row.Name,
          data: [row.Ticket_Month_Count[month]],
          backgroundColor: colorChart[index],
          key: index,
        });
      });

      setDatasetsState({ labels: [labels[month]], datasets });
    } else {
      var datasets = [];
      DataDashboard.chart.map((row, index) => {
        datasets.push({
          label: row.Name,
          data: row.Ticket_Month_Count,
          backgroundColor: colorChart[index],
          key: index,
        });
      });
      setDatasetsState({ labels, datasets });
    }
  };

  const handleChangeMonth = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(refMonth.current.value);
  };

  const submitHandle = (e) => {
    e.preventDefault(filter);
  };

  const handleReset = () => {
    var datasets = [];
      DataDashboard.chart.map((row, index) => {
        datasets.push({
          label: row.Name,
          data: row.Ticket_Month_Count,
          backgroundColor: colorChart[index],
          key: index,
        });
      });
  };

  // const filterData = (){
  //   const dates = [...]
  // }
  // console.log(DataDashboard.panel.Month);
  return (
    <div className="App">
      <Form id="filter" onSubmit={submitHandle}>
        <section>
          <Row>
            <Col xs={6} md={{ span: 2, offset: 4 }}>
              <Form.Group className="mb-3">
                <Form.Select
                  name="Month"
                  onChange={handleChangeMonth}
                  ref={refMonth}
                >
                  <option value="">Select Month</option>
                  <option value="0">Januari</option>
                  <option value="1">Februari</option>
                  <option value="2">Maret</option>
                  <option value="3">April</option>
                  <option value="4">Mei</option>
                  <option value="5">Juni</option>
                  <option value="6">Juli</option>
                  <option value="7">Agustus</option>
                  <option value="8">September</option>
                  <option value="9">Oktober</option>
                  <option value="10">November</option>
                  <option value="11">Desember</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} md={2}>
              <Form.Group className="mb-3">
                <Form.Select
                  name="Year"
                  onChange={handleChangeMonth}
                  ref={refYear}
                >
                  <option value="">Select Year</option>
                  {year.map(function (item, i) {
                    return (
                      <option key={i}>
                        {item}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button type="submit" onClick={() => datasetsFilterMonth()}>
                Choose
              </Button>
            </Col>
            {/* <Col md={1}>
              <Button
                className="btn-light border-primary"
                type="submit"
                onClick={() => handleReset()}
              >
                Reset
              </Button>
            </Col> */}
          </Row>
        </section>
      </Form>
      <div>
        <Bar options={options} data={datasetsState} />
      </div>
    </div>
  );
}

export default TicketChart;

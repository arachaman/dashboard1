import React, { useState, useEffect, useRef} from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import TicketChart from "./TicketChart";
import DatasetsFilterMonth from './TicketChart'

const FilterForm = (props) => {
  const filterData =props.filterDate
  const [year, setYear] = useState([]);
  const [filter, setFilter] = useState({
    month: "",
    year: "",
  });
  const refMonth = useRef();
  const refYear = useRef();

  useEffect(() => {
    const d = new Date();
    var temp = [];
    for (var i = 2019; i <= d.getFullYear(); i++) {
      temp.push(i);
    }
    setYear(temp);
  }, []);


  // const datasetsFilterMonth = () => {
  //   var month = refMonth.current.value;
  //   var year = refYear.current.value;
  //   if (month !== "" || year !== "") {
  //     axios
  //       .get(`dashboard/chartFilter/${year}/${month}`)
  //       .then((res) => {
  //         // setResponseData(res.data.data);
  //         console.log(res.data.data);

  //         var datasets = [];
  //         //yang di map respon data
  //         res.data.data.chart.map((row, index) => {
  //           datasets.push({
  //             label: row.Name,
  //             data: row.Ticket_Month_Count,
  //             backgroundColor: colorChart[index],
  //             key: index,
  //           });
  //         });
  //         console.log(datasets);
  //         setResponseData({ labels: [labels[month]], datasets });
  //       })
  //       .catch((err) => {
  //         // Handle errors
  //         alert(err);
  //         console.error(err);
  //       });
  //   } else {
  //     getData();
  //   }
  // };

  // const handleChangeMonth = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(refMonth.current.value);
  // };

  const submitHandle = (e) => {
    e.preventDefault(filter);
  };

  return (
    <div>
      <Form id="filter" onSubmit={submitHandle}>
        <section>
          <Row>
            <Col xs={6} md={{ span: 2, offset: 4 }}>
              <Form.Group className="mb-3">
                <Form.Select
                  name="Month"
                  // onChange={handleChangeMonth}
                  ref={refMonth}
                >
                  <option value="">Select Month</option>
                  <option value="1">Januari</option>
                  <option value="2">Februari</option>
                  <option value="3">Maret</option>
                  <option value="4">April</option>
                  <option value="5">Mei</option>
                  <option value="6">Juni</option>
                  <option value="7">Juli</option>
                  <option value="8">Agustus</option>
                  <option value="9">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} md={2}>
              <Form.Group className="mb-3">
                <Form.Select
                  name="Year"
                  // onChange={handleChangeMonth}
                  ref={refYear}
                >
                  <option value="">Select Year</option>
                  {year.map(function (item, i) {
                    return <option key={i}>{item}</option>;
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button type="submit" onClick={() => filterData(refYear.current.value,refMonth.current.value)}>
                Choose
              </Button>
            </Col>
          </Row>
        </section>
      </Form>
    </div>
  );
};

export default FilterForm;

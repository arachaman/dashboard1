import React, { useState, useEffect, useRef } from "react";
// import DataDashboard from "../../utils/DataDashboard.json";
// import { InteractionItem } from "chart.js";
/* eslint-disable */
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "../../redux/axios";
import Data from "../Main";
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

function TicketChart(props) {
  const dataChart = props.dataChart;
  const filterDate = props.filterDate
  const [year, setYear] = useState([]);
  const refMonth = useRef();
  const refYear = useRef();

  useEffect(() => {
    const d = new Date();
    var temp = [];
    for (var i = 2022; i <= d.getFullYear(); i++) {
      temp.push(i);
    }
    setYear(temp);
    // getData();
  }, []);

  const options = {
    responsive: false,
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

  //get data from axios
  const [responseData, setResponseData] = useState();
  const getData = () => {
    var datasets = [];
    dataChart.map((row, index) => {
      datasets.push({
        label: row.Name,
        data: row.Ticket_Month_Count,
        backgroundColor: colorChart[index],
        key: index,
      });
    });
    console.log(datasets);
    console.log(filterDate);

    if(filterDate==null){
      setResponseData({ labels, datasets });
      console.log("all")

    }else{
      setResponseData({ labels: [[labels[filterDate[1]-1]]], datasets });
      console.log(filterDate[0])
      
    }
  };

  useEffect(()=>{
    getData()
  },[dataChart])


  // const [responseData, setResponseData] = useState();
  // const getDataChart = () => {
  //   var datasets = [];
  //   dataChart.map((row, index) => {
  //     datasets.push({
  //       label: row.Name,
  //       data: row.Ticket_Month_Count,
  //       backgroundColor: colorChart[index],
  //       key: index,
  //     });
  //   });
  //   console.log(datasets);
  //   setResponseData({ labels, datasets });
  // };

  // //kalo mau filter, panggil axiosnya lagi karena beda url
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

  if (responseData == null) {
    return <div>loading</div>;
  } else {
    return (
      <div className="App">
        <div><Bar options={options} data={responseData}/></div>
      </div>
    );
  }
}

export default TicketChart;

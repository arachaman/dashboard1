import React from "react";
import DataDashboard from "../../utils/DataDashboard.json";
import { InteractionItem } from "chart.js";
import { Row,Col } from "react-bootstrap";
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
      text: "Rate Average",
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

const datasets = [];
DataDashboard.chart.map((row, index) => {
  datasets.push({
    label: row.Name,
    data: row.Rate_Avg,
    backgroundColor: colorChart[index],
    key: index,
  });
});

const dataset = {
  labels,
  datasets,
};

function TicketChart() {
  return (
    <div className="App">
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <div>
            <Bar options={options} data={dataset} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TicketChart;

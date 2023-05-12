import React from "react";
import DataDashboard from "../../utils/DataDashboard.json";
import { InteractionItem } from "chart.js";
import { Row, Col } from "react-bootstrap";
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
    data: row.Ticket_Month_Count,
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
      <div>
        <Bar options={options} data={dataset} />
      </div>
    </div>
  );
}

export default TicketChart;

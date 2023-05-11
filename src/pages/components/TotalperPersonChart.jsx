import React from "react";
// import data from '../../utils/data.json'
import { InteractionItem } from "chart.js";
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
import { faker } from "@faker-js/faker";

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

export const data = {
  labels,
  datasets: [
    {
      label: "Hendra",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "red",
    },
    {
      label: "Joko",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "blue",
    },
    {
      label: "Alver",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "green",
    },
    {
      label: "Rama",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "grey",
    },
    {
      label: "Panji",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "black",
    },
    {
      label: "Abdul",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "yellow",
    },
  ],
};
console.log(data);

function TotalperPersonChart() {
  return (
    <div className="App">
      <div>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default TotalperPersonChart;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function(value) {
          return `${value / 1000}k`;
        },
      },
    },
  },
};

const chartStyle = {
  background: "#fff",
  margin: "20px 0px",
  padding: "30px",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
  borderRadius: "8px",
  maxWidth: "100%"
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: 'Progress',
      data: [40000, 30000, 50000, 60000, 80000, 90000, 20000, 40000, 60000, 80000, 90000, 10000],
      backgroundColor: '#5570f1',
      barThickness: 10,
      categoryPercentage: 0.8,
    },
  ],
};

export default function ProgressGraph() {
  return <Bar style={chartStyle} options={options} data={data} />;
}

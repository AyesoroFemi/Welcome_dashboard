"use client";

import Menu from "./assets/menu";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Set to false to hide the legend (header)
      },
      title: {
        display: false, // Set to false to hide the title
      },
    },
    elements: {
      line: {
        tension: 0.4, // Adjust the tension to control the curve
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false, // Remove vertical gridlines
          beginAtZero: true,
        },
      },
      y: {
        grid: {
          display: true, // Optionally, hide horizontal gridlines
        },
        beginAtZero: true,
        display: false, // Set to false to remove the main vertical axis line
      },
    },
  };
  
  const labels = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul"];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [600, 400, 300, 1500, 1200, 400, 600],
        borderColor: "#0000FF",
        backgroundColor: "#0000FF",
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };
function Sales() {
  return (
    <div className="bg-white rounded-xl p-4 mt-4">
      <div className="flex justify-between">
        <h1 className="font-[600]">Your Sales</h1>
        <div className="text-xs flex items-center gap-5">
          <div className="text-xs border-[1px] border-gray-300 rounded-md px-3 py-2 gap-3">
            <p className="font-[700]">Day</p>
          </div>
          <p className="text-gray-400 font-[600]">Week</p>
          <p className="text-gray-400 font-[600]">Month</p>
          <div className="bg-gray-200 rounded-md p-1.5">
            <Menu />
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-[600] mt-3">$142.000</h1>
      <p className="text-sm text-gray-400">Total income</p>
      <div className="pt-10 w-full">
          <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default Sales;

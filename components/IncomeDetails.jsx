"use client";

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
import CalendarDays from './assets/calendar_days';

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
  
  const labels = ["", "", "", "", "", "", ""];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [800, 400, 300, 1500, 1200, 400, 600],
        borderColor: "#a8f5cb",
        backgroundColor: "#a8f5cb",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };
function IncomeDetails() {
  return (
    <div className="bg-white rounded-xl h-[440px] ">
      <div className="flex justify-between p-4">
        <h1 className="font-[600]">Income Details</h1>
        <div className="text-xs flex items-center gap-5">
          <div className="text-xs border-[1px] border-gray-300 rounded-md px-3 py-2 gap-3">
            <p className="font-[700]">Day</p>
          </div>
          <p className="text-gray-400 font-[600]">Week</p>
          <p className="text-gray-400 font-[600]">Month</p>
          <div className="bg-[#f3f3f6] rounded-md p-1.5 text-[#878787] cursor-pointer">
            <CalendarDays  /> 
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-[600] mt-3 pl-4">$142.000</h1>
      <p className="text-sm text-gray-400 pl-4">Total income</p>
      <div className="pt-10  h-[240px] w-full">
          <Line options={options} data={data} />
      </div>
      <div className="flex justify-around">
        <div className="border-r-[1px] border-[bg-gray-50] h-full w-full flex flex-col items-center justify-center">
          <h1 className="font-[600]">$342.000</h1>
          <p className="text-sm text-gray-400">Total sales</p>
        </div>
        <div  className="border-r-[1px] border-[bg-gray-50] h-full w-full flex flex-col items-center justify-center">
          <h1 className="font-[600]">$200.000</h1>
          <p className="text-sm text-gray-400">Spending</p>
        </div>
        <div className=" h-full w-full flex flex-col items-center justify-center">
          <h1 className="font-[600]">$142.000</h1>
          <p className="text-sm text-gray-400">Income</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeDetails
"use client";

import Menu from './assets/menu'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
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
          display: false, // Optionally, hide horizontal gridlines
        },
        beginAtZero: false,
        display: false, // Set to false to remove the main vertical axis line
      },
    },
  };
  
function IncomeBreakdown() {
  return (
    <div className="bg-white rounded-xl p-4 ">
      <div className="flex justify-between">
        <h1 className="font-[600]">Income Breakdown</h1>
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
      <div className="pt-4 h-[150px] w-full">
          <Doughnut data={data} />
      </div>
    </div>
  )
}

export default IncomeBreakdown
"use client";

import Menu from './assets/menu'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Total Sales',
        data: [25, 3, 5, 12 ],
        backgroundColor: [
          '#F4B665',
          'rgb(255,128,139)',
          'rgb(94,129,244)',
         ' rgb(138,241,185)',
       
        ],
        borderColor: [
            '#F4B665',
            'rgb(255,128,139)',
          'rgb(94,129,244)',
          'rgb(138,241,185)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
function IncomeBreakdown() {
  return (
    <div className="bg-white rounded-xl p-4 h-[350px]">
      <div className="flex justify-between">
        <h1 className="font-[600]">Income Breakdown</h1>
        <div className="text-xs flex items-center gap-5">
          <div className="text-xs border-[1px] border-gray-300 rounded-md px-3 py-2 gap-3">
            <p className="font-[700]">Day</p>
          </div>
          <p className="text-gray-400 font-[600]">Week</p>
          <p className="text-gray-400 font-[600]">Month</p>
          <div className="bg-[#f0f0f3] rounded-md p-1.5">
            <Menu color="#b8b8cd" />
          </div>
        </div>
      </div>
      <div className="pt-4 flex justify-center">
          <div className='h-[250px]' >
            <Doughnut data={data} />
          </div>
      </div>
    </div>
  )
}

export default IncomeBreakdown
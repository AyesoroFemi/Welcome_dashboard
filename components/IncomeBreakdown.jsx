"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import CalendarDays from './assets/calendar_days';
import { INCOME_BREAKDOWN_DATA } from '@/data';

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
    <div className="bg-white rounded-xl p-4 h-[440px]">
      <div className="flex justify-between">
        <h1 className="font-[600]">Income Breakdown</h1>
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
      <div className="pt-4 flex justify-center my-5">
          <div className='h-[250px]' >
            <Doughnut data={data} />
          </div>
      </div>
      <div className='grid grid-cols-2 gap-x-12'>
        {INCOME_BREAKDOWN_DATA.map((item) => (
        <div className='flex items-center justify-between mt-4' key={item.id}>
          <div className='flex items-center gap-2'>
            <div style={{ borderColor: item.color }} className={`border-4 h-2 w-2 p-0.5 bg-white rounded-full`}></div>
            <div className='text-xs font-[500]'>{item.title}</div>
          </div>
          <div className='font-bold text-xs'>{item.value}</div>
        </div>

        ))}

      </div>
    </div>
  )
}

export default IncomeBreakdown

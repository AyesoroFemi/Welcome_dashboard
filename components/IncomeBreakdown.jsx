import React from 'react'
import Menu from './assets/menu'

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
    
    </div>
  )
}

export default IncomeBreakdown
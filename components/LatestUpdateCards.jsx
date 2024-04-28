import { LATEST_UPDATES } from "@/data";
import React from "react";

function UpdateCard() {
  return (
    <div className="">
      {LATEST_UPDATES.map((item) => (
        <div key={item.id} className="p-4 w-full text-sm flex flex-col lg:flex-row justify-between items-center gap-14 rounded-xl bg-[#fbfbfd] my-2">
          <div className="flex items-center gap-3">
            <div className="bg-[#eff3fe] rounded-md text-[#6c8cf5] p-1.5">{item.icon}</div>
            <p className="font-[700] text-[#474748] text-xs">{item.title}</p>
          </div>
          <p className="text-gray-500 font-[500] text-xs">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default UpdateCard;

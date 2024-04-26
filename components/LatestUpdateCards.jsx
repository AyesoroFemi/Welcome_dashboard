import { LATEST_UPDATES } from "@/data";
import React from "react";

function UpdateCard() {
  return (
    <div className="">
      {LATEST_UPDATES.map((item) => (
        <div key={item.id} className="p-3 text-sm flex justify-between items-center gap-14 rounded-xl bg-gray-50 my-2">
          <div className="flex items-center gap-3">
            <div className="bg-gray-200 rounded-md p-1.5">{item.icon}</div>
            <p className="font-[500]">{item.title}</p>
          </div>
          <p className="text-gray-500 font-[500] text-xs">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default UpdateCard;

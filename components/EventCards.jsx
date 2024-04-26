import { UPCOMING_EVENTS } from "@/data";
import React from "react";
import Dots from "./assets/dots";

function EventCards() {
  return (
    <div className="mt-3">
      {UPCOMING_EVENTS.map((item) => (
        <div className="p-3 text-sm rounded-xl bg-gray-50 my-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-1.5">
              <div
                style={{ backgroundColor: item.color }}
                className={`bg-${item.color} w-2 h-2 rounded-full`}
              ></div>
              <p className="text-sm"> {item.time}</p>
            </div>
            <Dots />
          </div>
          <h1 className="font-[500] mt-1">{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventCards;

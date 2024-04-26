import { LATEST_EVENTS } from "@/data";

function LatestEvents() {
  return (
    <div className="bg-white rounded-xl mt-4 h-[350px]">
      <div className="flex justify-between  p-4 ">
        <h1 className="font-[600]">Latest Events</h1>
        <div className="text-xs border-[1px] border-gray-300 rounded-md px-3 py-2 gap-3">
          <p className="font-[700]">View all</p>
        </div>
      </div>
      <div className="flex justify-between bg-gray-50 p-4 ">
        <h1 className="font-[600] text-sm text-gray-400">Events</h1>
        <div className="text-xs">
          <p className="font-[700] text-gray-400">Details</p>
        </div>
      </div>
      <div className="mx-4 pb-3">
        {LATEST_EVENTS.map((item) => (
          <div key={item.id} className="my-4 text-xs flex items-center justify-between">
            <div className="flex gap-4">
              <div className="bg-[#eff3fe] flex justify-center items-center rounded-md px-3">
                <span>{item.icon}</span>
              </div>
              <div>
                <h1 className="font-[600] mt-1">{item.title}</h1>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
            </div>
            <p className="font-[700] text-xs">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestEvents;

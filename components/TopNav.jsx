import Cancel from "./assets/cancel";
import Menu from "./assets/menu";
import Search from "./assets/search_bar";

function TopNav() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-[#f0f0f3] rounded-md p-1.5 cursor-pointer">
            <Menu color="#b8b8cd" />
          </div>
        <h1 className="font-[700]">Dashboard</h1>
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <div className="bg-gray-200 rounded-md p-1.5 cursor-pointer">
            <Search />
          </div>
          <div className="bg-gray-200 rounded-md p-1.5 cursor-pointer">
            <Cancel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

import Chat from "./assets/chat";
import Menu from "./assets/menu";

function TopNav() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 rounded-md p-1.5">
            <Menu />
          </div>
        <h1 className="font-[500]">Dashboard</h1>
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <div className="bg-gray-200 rounded-md p-1.5">
            <Chat />
          </div>
          <div className="bg-gray-200 rounded-md p-1.5">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

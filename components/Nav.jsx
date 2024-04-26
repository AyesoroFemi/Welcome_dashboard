import EventCards from "./EventCards";
import UpdateCard from "./LatestUpdateCards";
import Sidenav from "./Sidenav";
import Bolt from "./assets/bolt";
import Logo from "./assets/logo";

function Nav() {
    const styles = {
        fontSize: "18px",
    }
  return (
    <div className="flex">
      <div className="w-[80px] border-r-[1px] border-gray-200 p-3 flex flex-col items-center">
        <div className="">
          <Bolt />
        </div>
        <Sidenav />
      </div>
      <div className="ml-8">
        <Logo/>
        <div className="">
          <p style={styles} className=" text-gray-500">
            Welcome,
          </p>
          <h1 className="text-2xl font-[500]">WhiteUI.Store</h1>
          <h1 className="mt-8 text-sm font-[700]">Latest updates</h1>
        </div>
        <UpdateCard />
        <h1 className="mt-7 text-sm font-[700]">Upcoming events</h1>
        <EventCards/>
      </div>
    </div>
  );
}

export default Nav;

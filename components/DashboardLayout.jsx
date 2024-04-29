import IncomeBreakdown from "./IncomeBreakdown"
import IncomeDetails from "./IncomeDetails"
import LatestEvents from "./LatestEvents"
import Sales from "./Sales"
import TopNav from "./TopNav"

function DashboardLayout() {
  return (
    <div className="bg-[#F7F7F8]  w-full h-[100vh] overflow-auto">
        <TopNav />
        <div className="grid lg:grid-cols-2 gap-6 pb-8 px-6 py-4">
            <Sales/>
            <LatestEvents />
            <IncomeBreakdown/>
            <IncomeDetails />
        </div>
    </div>
  )
}

export default DashboardLayout
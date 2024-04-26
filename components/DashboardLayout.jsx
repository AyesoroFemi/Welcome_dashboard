import IncomeBreakdown from "./IncomeBreakdown"
import IncomeDetails from "./IncomeDetails"
import LatestEvents from "./LatestEvents"
import Sales from "./Sales"
import TopNav from "./TopNav"

function DashboardLayout() {
  return (
    <div className="bg-gray-100 px-6 py-4">
        <TopNav />
        <div className="grid grid-cols-2 gap-6">
            <Sales/>
            <LatestEvents />
            <IncomeBreakdown/>
            <IncomeDetails />
        </div>
    </div>
  )
}

export default DashboardLayout
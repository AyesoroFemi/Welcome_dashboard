import { SIDEBAR_ICONS } from "@/data"
import Link from "next/link"


function Sidenav() {
  return (
   <div>
     <div className="px-3">
        {SIDEBAR_ICONS.map((item) => (
            <Link href={item.link} className="px-4 " key={item.id}>{item.icon}</Link>
        ))}
    </div>
   </div>
  )
}

export default Sidenav
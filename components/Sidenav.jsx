"use client"
import { SIDEBAR_ICONS } from "@/data"
import Link from "next/link"
import { usePathname } from "next/navigation"


function Sidenav() {
  const path = usePathname()
  return (
   <div>
     <div className="px-3">
        {SIDEBAR_ICONS.map((item) => (
            <div key={item.id} className={`flex items-center px-[13px] ml-1 my-4 ${path === item.link ? "text-[#6c8cf5] border-r-2 border-[#6c8cf5]" : "text-[#a9a9c2]"}`}>
                <Link href={item.link} className={`p-2.5 rounded-md ${path === item.link ? "bg-[#eff3fe]" : ""}`} >{item.icon}</Link>
            </div>
        ))}
    </div>
    <div className="flex items-center px-7">
      <img className="w-[40px] h-[40px] rounded-md object-cover" src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
    </div>
   </div>
  )
}

export default Sidenav
// import Image from "next/image";

import DashboardLayout from "@/components/DashboardLayout";
import Nav from "@/components/Nav";

export default function Home() {
  return (
   
   <div className="h-[100vh] overflow-y-scroll">
     <div className="h-[100vh] grid md:grid-cols-[20%_80%] lg:grid-cols-[35%_65%] xl:grid-cols-[30%_70%] w-full">
      <Nav />
      <DashboardLayout />
    </div>
   </div>
  );
}

// import Image from "next/image";

import DashboardLayout from "@/components/DashboardLayout";
import Nav from "@/components/Nav";

export default function Home() {
  return (
   
    <div className="grid grid-cols-[30%_70%]">
      <Nav />
      <DashboardLayout />
    </div>
  );
}

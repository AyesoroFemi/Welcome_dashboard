import { IoSpeedometerOutline } from "react-icons/io5";


import BrifeCase from "@/components/assets/brief_case";
import Calender from "@/components/assets/calendar";
import CalendarDays from "@/components/assets/calendar_days";
import Cart from "@/components/assets/cart";
import Chat from "@/components/assets/chat";
import File from "@/components/assets/file";
import Search from "@/components/assets/search_bar";
import Time from "@/components/assets/time";
import Box from "@/components/assets/box";
import Calculator from "@/components/assets/calculator";
import Office from "@/components/assets/office";
import ArrowDown from "@/components/assets/arrow-down";
// 

export const SIDEBAR_ICONS = [
  { id: 1, icon: <Time />,  link: "/" },
  { id: 2, icon: <BrifeCase />, link: "/price" },
  { id: 3, icon: <Calender />, link: "/a" },
  { id: 4, icon: <File />, link: "/b" },
  { id: 5, icon: <CalendarDays />, link: "/c" },
  { id: 6, icon: <Search />, link: "/d" },
  { id: 7, icon: <Chat />, link: "/e" },

  { id: 8, icon: <Box />, link: "/f" },
  { id: 9, icon: < Calculator />, link: "/g" },
  { id: 10, icon: <Office />, link: "/h" },
  { id: 11, icon: <ArrowDown />, link: "/i" },
//   { id: 6, icon: <CalendarDays />, link: "/j" },
//   { id: 7, icon: <Search />, link: "/k" },
//   { id: 8, icon: <Chat />, link: "/l" },
];


export const LATEST_UPDATES = [
    { id: 1, icon: <Cart color="#6c8cf5" />, title: "Item sale #340-00", value: "+$890.00" },
    { id: 2, icon: <Cart color="#6c8cf5" />,  title: "New lead created", value: "30min" },
    { id: 3, icon: <Cart color="#6c8cf5" />,  title: "Item sale #340-00", value: "+$940.00" },
    { id: 4, icon: <Cart color="#6c8cf5"/>,  title: "Item upload complete", value: "45 min" },
    { id: 5, icon: <Cart color="#6c8cf5" />,  title: "Email notification sent", value: "2hrs" },
];


export const UPCOMING_EVENTS = [
    { id: 1, icon: <Cart />, time: '05:48AM', title: "Meeting with a client", description: "Tell how to boost website traffic", color: "#0000FF"},
    { id: 2, icon: <Cart />, time: '10:28AM', title: "New project discussion", description: "Business Cards Does Your Business", color: "yellow" },
];

export const LATEST_EVENTS = [
    { id: 1, icon: <Cart color="#6c8cf5" />, title: "Invoice #AA-04-19-1890678", description: "New Madieton LLC", value: "$118.00"},
    { id: 2, icon: <Cart color="#6c8cf5"/>, title: "Client Bernard Stanley", description: "bernard.stanley@gmail.com", value: "$3208.00" },
    { id: 2, icon: <Cart color="#6c8cf5"/>, title: "Meeting with the client", description: "24 Vandervort Springs", value: "29 Oct 2019" },
    { id: 2, icon: <Cart color="#6c8cf5"/>, title: "Invoice #AA-04-19-1890243", description: "Tyriquemouth LLC", value: "$578.00" },
];
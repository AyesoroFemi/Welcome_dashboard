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
import Lead from "@/components/assets/lead";
import Sales from "@/components/assets/sales";
import Upload from "@/components/assets/upload";
import Bell from "@/components/assets/bell";
import Document from "@/components/assets/document";
import Receipt from "@/components/assets/receipt";
import Users from "@/components/assets/users";
import SalesReceipt from "@/components/assets/sales-receipt";
// 

export const SIDEBAR_ICONS = [
  { id: 1, icon: <Time />,  link: "/" },
  { id: 2, icon: <BrifeCase />, link: "/price" },
  { id: 3, icon: <Calender />, link: "/#a" },
  { id: 4, icon: <File />, link: "/#b" },
  { id: 5, icon: <CalendarDays />, link: "/#c" },
  { id: 6, icon: <Search />, link: "/#d" },
  { id: 7, icon: <Chat />, link: "/#e" },
  { id: 8, icon: <Box />, link: "/#f" },
  { id: 9, icon: < Calculator />, link: "/#g" },
  { id: 10, icon: <Office />, link: "/h" },
  { id: 11, icon: <ArrowDown />, link: "/i" },
];


export const LATEST_UPDATES = [
    { id: 1, icon: <Cart color="#6c8cf5" />, title: "Item sale #340-00", value: "+$890.00" },
    { id: 2, icon: <Lead color="#6c8cf5" />,  title: "New lead created", value: "30min" },
    { id: 3, icon: <Sales color="#6c8cf5" />,  title: "Item sale #340-00", value: "+$940.00" },
    { id: 4, icon: <Upload color="#6c8cf5"/>,  title: "Item upload complete", value: "45 min" },
    { id: 5, icon: <Bell color="#6c8cf5" />,  title: "Email notification sent", value: "2hrs" },
];


export const UPCOMING_EVENTS = [
    { id: 1, icon: <Cart />, time: '05:48AM', title: "Meeting with a client", description: "Tell how to boost website traffic", color: "#0000FF"},
    { id: 2, icon: <Cart />, time: '10:28AM', title: "New project discussion", description: "Business Cards Does Your Business", color: "yellow" },
];

export const LATEST_EVENTS = [
    { id: 1, icon: <Document color="#6c8cf5" />, title: "Invoice #AA-04-19-1890678", description: "New Madieton LLC", value: "$118.00"},
    { id: 2, icon: <Receipt color="#6c8cf5"/>, title: "Client Bernard Stanley", description: "bernard.stanley@gmail.com", value: "$3208.00" },
    { id: 3, icon: <Users color="#6c8cf5"/>, title: "Meeting with the client", description: "24 Vandervort Springs", value: "29 Oct 2019" },
    { id: 4, icon: <SalesReceipt  color="#6c8cf5"/>, title: "Invoice #AA-04-19-1890243", description: "Tyriquemouth LLC", value: "$578.00" },
];

export const INCOME_BREAKDOWN_DATA = [
    { id: 1, title: "Marketing Channels", value: "$22.0k", color: "rgb(94,129,244)"},
    { id: 2, title: "Offline Channels", value: "$18.6k", color: "#F4B665" },
    { id: 3, title: "Direct Sales", value: "$8.4k", color: "rgb(138,241,185)" },
    { id: 4, title: "Other Channels", value: "$15.3k", color: "rgb(255,128,139)" },
];
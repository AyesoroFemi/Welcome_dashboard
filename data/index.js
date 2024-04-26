import BrifeCase from "@/components/assets/brief_case";
import Calender from "@/components/assets/calendar";
import CalendarDays from "@/components/assets/calendar_days";
import Cart from "@/components/assets/cart";
import Chat from "@/components/assets/chat";
import File from "@/components/assets/file";
import Search from "@/components/assets/search_bar";
import Time from "@/components/assets/time";

export const SIDEBAR_ICONS = [
  { id: 2, icon: <Time />, link: "/" },
  { id: 3, icon: <BrifeCase />, link: "/" },
  { id: 4, icon: <Calender />, link: "/" },
  { id: 5, icon: <File />, link: "/" },
  { id: 6, icon: <CalendarDays />, link: "/" },
  { id: 7, icon: <Search />, link: "/" },
  { id: 8, icon: <Chat />, link: "/" },

  { id: 2, icon: <Time />, link: "/" },
  { id: 3, icon: <BrifeCase />, link: "/" },
  { id: 4, icon: <Calender />, link: "/" },
  { id: 5, icon: <File />, link: "/" },
  { id: 6, icon: <CalendarDays />, link: "/" },
  { id: 7, icon: <Search />, link: "/" },
  { id: 8, icon: <Chat />, link: "/" },
];


export const LATEST_UPDATES = [
    { id: 1, icon: <Cart />, title: "Item sale #340-00", value: "+$890.00" },
    { id: 2, icon: <Cart />,  title: "New lead created", value: "30min" },
    { id: 3, icon: <Cart />,  title: "Item sale #340-00", value: "+$940.00" },
    { id: 4, icon: <Cart/>,  title: "Item upload complete", value: "45 min" },
    { id: 5, icon: <Cart />,  title: "Email notification sent", value: "2hrs" },
];


export const UPCOMING_EVENTS = [
    { id: 1, icon: <Cart />, time: '05:48AM', title: "Meeting with a client", description: "Tell how to boost website traffic", color: "#0000FF"},
    { id: 2, icon: <Cart />, time: '10:28AM', title: "New project discussion", description: "Business Cards Does Your Business", color: "yellow" },
];

export const LATEST_EVENTS = [
    { id: 1, icon: <Cart />, title: "Invoice #AA-04-19-1890678", description: "New Madieton LLC", value: "$118.00"},
    { id: 2, icon: <Cart />, title: "Client Bernard Stanley", description: "bernard.stanley@gmail.com", value: "$3208.00" },
    { id: 2, icon: <Cart />, title: "Meeting with the client", description: "24 Vandervort Springs", value: "29 Oct 2019" },
    { id: 2, icon: <Cart />, title: "Invoice #AA-04-19-1890243", description: "Tyriquemouth LLC", value: "$578.00" },
];
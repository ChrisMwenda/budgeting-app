import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import BillsList from "./BillsList";
import SearchBar from "./SearchBar";
import AddBill from "./AddBill";

// // Calendar dependancies:
// const locales = {
//     "en-US": require("date-fns/locale/en-US"),
//   };
//   const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales,
//   });
  
  // function to fetch Bills FromDB:
  
  
  const bills = fetch("http://localhost:3000/bills")
  .then((response)=>response.json())
  .then((data)=>(console.log(data)))

  // Setting search prop for use in components


  // Function Component
function MainContainer(){
    const [newBills, setNewBills] = useState({ title: "", allDay: true,start: "", end: "", amount:""});
    const [allBills, setAllBills] = useState(bills);
    const [search, setSearch] = useState("");

  
    
      
    return(
<>
<h1 className="MainHeader">Albus Budget Planner</h1>
<SearchBar search={search} setSearch={setSearch} />
<AddBill setNewBills={setNewBills} newBills={newBills}></AddBill>
{/* <Calendar localizer={localizer} bills={allBills} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} /> */}
<BillsList search={search}></BillsList>
</>
    )
}
export default MainContainer;
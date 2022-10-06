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

const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  
  // function renderBillsFromDB(){
  
  
  const bills = fetch("http://localhost:3000/bills")
  .then((response)=>response.json())
  .then((data)=>(console.log(data)))


function MainContainer(){
    const [newBills, setNewBills] = useState({ title: "", allDay: true,start: "", end: "", amount:""});
    const [allBills, setAllBills] = useState(bills);
  
    function handleAddBill() {
        setAllBills([...allBills,newBills])
        console.log(allBills)
        fetch("http://localhost:3000/bills", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBills),
        });
         }
      
    return(
<>
<h1>Albus Budget Planner</h1>
<h2>Add New Event</h2>
<div>
    <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newBills.title} onChange={(e) => setNewBills({ ...newBills, title: e.target.value })} />
    <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newBills.start} onChange={(start) => setNewBills({ ...newBills, start })} />
    <DatePicker placeholderText="End Date" selected={newBills.end} onChange={(end) => setNewBills({ ...newBills, end })} />
    <button stlye={{ marginTop: "10px" }} onClick={handleAddBill}>
        Add Bill
    </button>
</div>
<Calendar localizer={localizer} bills={allBills} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
<BillsList></BillsList>
</>
    )
}
export default MainContainer;
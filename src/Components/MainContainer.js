import React, { useState } from "react";

import BillsList from "./BillsList";
import SearchBar from "./SearchBar";
import AddBill from "./AddBill";

const bills = fetch("http://localhost:3000/bills")
  .then((response)=>response.json())
  .then((data)=>(console.log(data)))

  // Setting search prop for use in components


  // Function Component
function MainContainer(){
    const [newBills, setNewBills] = useState({bills});
    // const [allBills, setAllBills] = useState(bills);
    const [search, setSearch] = useState("");

      return(
<>
<h1 className="MainHeader">Albus Budget Planner</h1>
<SearchBar style={{margin:"30px"}} search={search} setSearch={setSearch} />
<AddBill setNewBills={setNewBills} newBills={newBills}></AddBill>
{/* <Calendar localizer={localizer} bills={allBills} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} /> */}
<BillsList search={search}></BillsList>
</>
    )
}
export default MainContainer;
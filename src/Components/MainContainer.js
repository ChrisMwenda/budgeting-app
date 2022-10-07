import React, { useState } from "react";

import BillsList from "./BillsList";
import SearchBar from "./SearchBar";
import AddBill from "./AddBill";
  
// Function Component
function MainContainer(){

  // fetch bills from the database
const bills = fetch("https://localhost:3000/bills")
.then((response)=>response.json())
.then((data)=>(console.log(data)))

  console.log(bills);
    const [newBills, setNewBills] = useState({bills});
    console.log(newBills);
    
    const [search, setSearch] = useState("");

      return(
<>
<h1 className="MainHeader">Albus Budget Planner</h1>
{/* <SearchBar style={{margin:"30px"}} search={search} setSearch={setSearch} /> */}
<AddBill setNewBills={setNewBills} newBills={newBills}></AddBill>
<BillsList search={search}></BillsList>
</>
    )
}
export default MainContainer;
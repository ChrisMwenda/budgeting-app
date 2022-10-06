import React, { useState } from "react";

import BillsList from "./BillsList";
import SearchBar from "./SearchBar";
import AddBill from "./AddBill";

// fetch bills from the database
const bills = fetch("http://localhost:3000/bills")
  .then((response)=>response.json())
  .then((data)=>(console.log(data)))
  
// Function Component
function MainContainer(){
    const [newBills, setNewBills] = useState({bills});
    
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
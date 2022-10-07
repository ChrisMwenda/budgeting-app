import React, { useEffect, useState } from "react";
import Bill from "./Bill";

function BillsList({search}){
  const[bill,setBill]=useState("")

useEffect(() => {
  fetch("https://my-json-server.typicode.com/ChrisMwenda/Budgeting-app-db/bills/")
    .then((res) => res.json())
    .then((data) => {
      setBill(data);
    });
}, []);
return(
<table className="paddedtable">
      <tbody>
        <tr>
          <th>
            <h3 className="tableHeader" style={{margin:"50px"}}>Title </h3>
          </th>
          <th>
            <h3 className="tableHeader"style={{margin:"50px"}}>Date</h3>
          </th>
          <th>
            <h3 className="tableHeader" style={{margin:"50px"}}>Amount</h3>
          </th>
        </tr>
        {bill && <Bill bill={bill} search={search}/>}
      </tbody>
    </table>
)
}

export default BillsList;

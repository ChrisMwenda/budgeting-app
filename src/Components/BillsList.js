import React, { useEffect, useState } from "react";
import Bill from "./Bill";

function BillsList({search}){
  const[bill,setBill]=useState("")

useEffect(() => {
  fetch("http://localhost:3000/bills")
    .then((res) => res.json())
    .then((data) => {
      setBill(data);
    });
}, []);
return(
<table className="ui celled striped padded table" style={{alignContent:"center"}}>
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
import React, { useEffect, useState } from "react";
import App from "./App"
import Bill from "./Bill";

function BillsList({search}){
  const[bill,setBill]=useState("")

useEffect(() => {
  fetch("http://localhost:3000/bills")
    .then((res) => res.json())
    .then((data) => {
      setBill(data);
    });
}, [Bill]);
return(
<table className="ui celled striped padded table" style={{alignContent:"center"}}>
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header" style={{margin:"30px"}}>Title </h3>
          </th>
          <th>
            <h3 className="ui center aligned header"style={{margin:"30px"}}>All Day</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"style={{margin:"30px"}}>Start</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"style={{margin:"30px"}}>End</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" style={{margin:"30px"}}>Amount</h3>
          </th>
        </tr>
        {bill && <Bill bill={bill} search={search}/>}
      </tbody>
    </table>
)
}

export default BillsList;

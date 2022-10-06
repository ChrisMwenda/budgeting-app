import React from "react"
import App from "./App"

function BillsList(){
return(
<table className="ui celled striped padded table" style={{alignContent:"center"}}>
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header" style={{margin:"30px"}}>Date </h3>
          </th>
          <th>
            <h3 className="ui center aligned header"style={{margin:"30px"}}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"style={{margin:"30px"}}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" style={{margin:"30px"}}>Amount</h3>
          </th>
        </tr>
        {/* {transaction && <Transaction transaction={transaction} search={search} />} */}
      </tbody>
    </table>
)
}

export default BillsList;

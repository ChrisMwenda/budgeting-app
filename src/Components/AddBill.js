import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddBill({newBills,setNewBills,}){
function handleAddBill() {
            setNewBills(newBills)
            console.log(newBills)
            fetch("http://localhost:3000/bills", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newBills),
            });
             }
return(
    <div>
  <form>
    <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newBills.title} onChange={(e) => setNewBills({ ...newBills, title: e.target.value })} />
    <select name="All Day"> 
        <h1>All Day</h1>
        <option>true</option>
        <option>false</option>
    </select>
    <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newBills.start} onChange={(start) => setNewBills({ ...newBills, start })} />
    <DatePicker placeholderText="End Date" selected={newBills.end} onChange={(end) => setNewBills({ ...newBills, end })} />
    <button stlye={{ marginTop: "10px" }} type="submit "onClick={handleAddBill}>
        Add Bill
    </button>
  </form>
</div>
)
}
export default AddBill;
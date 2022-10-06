import React from "react";

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
    <input className="inputFields" type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} required value={newBills.title} onChange={(e) => setNewBills({ ...newBills, title: e.target.value })} />
    <input className="inputFields" type="date"name="date"required value={newBills.date}  onChange={(e) => setNewBills({...newBills, date: e.target.value})}/>
    <input className="inputFields" type="text"name="amount" placeholder="Add Amount"required value={newBills.amount}  onChange={(e) => setNewBills({...newBills, amount: e.target.value})}/>
   <button style={{ marginTop: "10px" }} type="submit "onClick={handleAddBill}>
        Add Bill
    </button>
  </form>
</div>
)
}
export default AddBill;
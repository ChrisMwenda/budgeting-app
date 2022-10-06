import React from "react";

function Bill({bill,search}){
  function handleDelete(){
    fetch("http://localhost:3000/bills/", {method: "DELETE",})
  }

   const billInfo = bill
          .filter((searchItem) => {
            //if search=== ""{ return searchItem}//
            //else searchItem.description//
            return search === "" ? searchItem : searchItem.description.includes(search);
          })
          .map((trnsct) => {
            return (
              <tr key={trnsct.id}>
                <td >{trnsct.title}</td>
                <td>{trnsct.date}</td>
                <td> {trnsct.amount}</td>
                <button
                  className="removeButton"
                  onClick={()=>{
                    fetch("http://localhost:3000/bills", {
                      method: "DELETE",
                    });
                  }}
                >
                  Remove
                </button>
              </tr>
            );
          });
      
        return <React.Fragment>{billInfo}</React.Fragment>;
       }

export default Bill;
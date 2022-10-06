import React from "react";

function Bill({bill,search}){

   const billInfo = bill
          .filter((searchItem) => {
            //if search=== ""{ return searchItem}//
            //else searchItem.description//
            return search === "" ? searchItem : searchItem.description.includes(search);
          })
          .map((trnsct) => {
            return (
              <tr key={trnsct.id}>
                <td>{trnsct.title}</td>
                <td>{trnsct.allDay}</td>
                <td>{trnsct.start}</td>
                <td>{trnsct.end}</td>
                <td> {trnsct.amount}</td>
                <button
                  className="ui button"
                  onClick={()=>{
                    fetch("http://localhost:3000/bills" + trnsct.id, {
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
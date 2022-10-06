
import React from "react";
import MainContainer from "./MainContainer";


// console.log (bills)
// [
//   {
//       title: "Netflix",
//       allDay: true,
//       start: new Date(2021, 6, 0),
//       end: new Date(2021, 6, 0),
//       amount: 1500
//   },
//   {
//       title: "Rent",
//       allDay: true,
//       start: new Date(2021, 6, 7),
//       end: new Date(2021, 6,7),
//       amount:29000
//   },
//   {
//       title: "Power Bill",
//       allDay: true,
//       start: new Date(2021, 6, 20),
//       end: new Date(2021, 6, 20),
//       amount:1200
//   },
// ];

function App() {
      // for (let i=0; i<allBills.length; i++){

      //     const d1 = new Date (allBills[i].start);
      //     const d2 = new Date(newBills.start);
      //     const d3 = new Date(allBills[i].end);
      //     const d4 = new Date(newBills.end);
    
      //   console.log(d1 <= d2);
      //   console.log(d2 <= d3);
      //   console.log(d1 <= d4);
      //   console.log(d4 <= d3);

      //      if (
      //       ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
      //         (d4 <= d3) )
      //       )
      //     {   
      //         alert("CLASH"); 
      //         break;
      //      }
  
      // }
      
      // setAllBills([...allBills, newBills]);

  return (
      <div className="App">
        <MainContainer></MainContainer>
      </div>
  );
}

export default App;

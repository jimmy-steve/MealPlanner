import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}



// import React from "react";
// import Day from "./Day";
// export default function Month({ month }) {
//   return (
//     <div className="flex-1 grid grid-cols-7 grid-rows-2">
//       {month.slice(0, 2).map((row, i) => (
//         <React.Fragment key={i}>
//           {row.map((day, idx) => (
//             <Day day={day} key={idx} rowIdx={i} />
//           ))}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

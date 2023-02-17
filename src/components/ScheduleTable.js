import React from "react";

const ScheduleTable = (props) => {
    const schedule = props.schedule;
    const [selectedCell, setSelectedCell] = React.useState(null);
  
    const handleCellClick = (cell) => {
      setSelectedCell(cell);
      props.onCellClick(cell);
      console.log(cell);
    };
  
    return (
      <div className="schedule-table">
        <table className="table bg-white">
          <thead>
            <tr>
              <th>Dimanche 01/01/2023</th>
              <th>Lundi 02/01/2023</th>
              <th>Mardi 03/01/2023</th>
              <th>Mercredi 04/01/2023</th>
              <th>Jeudi 05/01/2023</th>
              <th>Vendredi 06/01/2023</th>
              <th className="last">Samedi 07/01/2023</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, i) => (
              <tr key={i}>
                {row.map((col, j) => (
                  <td
                    key={j}
                    className={`${col.active ? "active" : ""} ${
                      col === selectedCell ? "selected" : ""
                    }`}
                    onClick={() => handleCellClick(col)}
                  >
                    {col.active && (
                      <>
                        <h4>{col.title}</h4>
                        <img src={col.image} alt={col.title} className="img-fluid"  />
                        <p></p>
                        <div className="hover">
                        <img src={col.image} alt={col.title} className="img-fluid" />
                          <h4>{col.activity}</h4>
                          <p>{col.time}</p>
                          
                          <span>{col.instructor}</span>
                        </div>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ScheduleTable;
  
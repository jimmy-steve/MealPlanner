import React from "react";
import moment from 'moment';


const ScheduleTable = (props) => {
    const schedule = props.schedule;
    const [selectedCell, setSelectedCell] = React.useState(null);


    const today = moment();
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');
    const days = [];

    for (let day = startOfWeek; day <= endOfWeek; day = day.clone().add(1, 'd')) {
      days.push(day);
    }

    console.log(days);

  
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
            {days.map(day => (
              <th key={day.format('dddd DD/MM/YYYY')}>
                {day.format('dddd DD/MM/YYYY')}
              </th>
            ))}
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
  
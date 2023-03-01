import React from "react";
import axios from "axios";
import "./Planning.scss";
import WeekCalendar from "./weekCalendar/WeekCalendar";
import { useNavigate } from "react-router-dom";
import "./calendar.scss";

const Planning = () => {
  // const history = useNavigate();
  // const [MealList, setMealList] = React.useState([]);
  // const [events, setEvents] = React.useState([]);

  // const fetchDayListByUser = () => {
  //   var userId = 100;
  //   axios
  //     .get("http://localhost:8000/api/Days/"+userId+"/byUserIdWithRecipe")
  //     .then((response) => {
  //       console.log(response.data);
  //       setMealList(response.data);
  //     });
  // };

  // const fetchDayListByUser = () => {
  //   var userId = 100;
  //   axios
  //     .get("http://localhost:8000/api/Days/" + userId + "/byUserIdWithRecipe")
  //     .then((response) => {
  //       console.log(response.data);
  //       const mappedEvents = response.data.map((day) => ({
  //         title: getDayName(day.name),
  //         start: new Date(day.date),
  //         end: new Date(day.date),
  //       }));
  //       setEvents(mappedEvents);
  //     });
  // }; // ajout de la fermeture de la fonction
  // React.useEffect(() => {
  //   fetchDayListByUser();
  // }, []);

  // const events = [
  //   {
  //     start: new Date(),
  //     end: new Date(moment().add(1, 'days')),
  //     title: 'Some event',
  //   },
  //   {
  //     start: new Date(moment().add(3, 'days')),
  //     end: new Date(moment().add(4, 'days')),
  //     title: 'Another event',
  //   },
  // ];
  return (
    <div className="container-fluid">
      <h1>Mon Planning</h1>
      <WeekCalendar />
      <br></br>
      <hr class="border border-danger border-3 opacity-75" />
      <br></br>
      <div className="container-fluid">
        <div className="col-10 mx-auto"></div>
      </div>
    </div>
  );
};

export default Planning;

import React from "react";
import axios from "axios";
import "./Planning.scss";
import WeekCalendar from "./weekCalendar/WeekCalendar";
import { useNavigate } from "react-router-dom";

const Planning = (props) => {
  // console.log('On est dans planning avec id de '+props.userId);
  const history = useNavigate();
  const [DayList, setDayList] = React.useState([]);

  const fetchDayListByUser = () => {
    let userIdTest = 100;

    axios
      .get(
        "http://localhost:8000/api/Recipes/users/"+userIdTest+"/recipes/WithDate"
      )
      .then((response) => {
        console.log("Ingredient Name "+response.data[0].recipe.ingredients[0].name);
        setDayList(response.data);
      });
  };

  React.useEffect(() => {
    fetchDayListByUser();
  }, []);

  return (
    <div className="container-fluid">
      <h1>Mon Planning</h1>
      <WeekCalendar dayList={DayList} {...props} history={history} />

      <br></br>

      <br></br>
      <div className="container-fluid">
        <div className="col-10 mx-auto"></div>
      </div>
    </div>
  );
};

// export default Planning;
//eslint-disable-next-line
export default function (props) {
  const history = useNavigate();
  return <Planning {...props} history={history} />;
}

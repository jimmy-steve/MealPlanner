import React from "react";
import axios from "axios";
import "./Planning.scss";
import WeekCalendar from "../weekCalendar/WeekCalendar";
import { useNavigate } from "react-router-dom";

const Planning = (props) => {
  const history = useNavigate();
  const [DayList, setDayList] = React.useState([]);

  const fetchDayListByUser = () => {
    let userIdTest = 100;

    axios
      .get(
        "http://localhost:8000/api/Recipes/users/"+userIdTest+"/recipes/WithDate"
      )
      .then((response) => {
        setDayList(response.data);
      });
  };

  React.useEffect(() => {
     fetchDayListByUser();
  }, []);

  return (
    <div className="container-fluid">
      <WeekCalendar dayList={DayList} userId={props.userId} {...props} history={history} />
    </div>
  );
};

// export default Planning;
//eslint-disable-next-line
export default function (props) {
  const history = useNavigate();
  return <Planning {...props} history={history} />;
}

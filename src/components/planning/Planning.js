import React from "react";
import "./Planning.scss";
import WeekCalendar from "../weekCalendar/WeekCalendar";
import { useNavigate } from "react-router-dom";
import UserIdContext from "../userIdContext";
const Planning = () => {
  const history = useNavigate();
  const userId = React.useContext(UserIdContext);
  console.log("userId by the Context : ", userId);
  return (
    <div className="container-fluid">
      <WeekCalendar history={history} />
    </div>
  );
};

// export default Planning;
//eslint-disable-next-line
export default function (props) {
  const { userId } = props;
  const history = useNavigate();
  return <Planning userId={userId} history={history} />;
}

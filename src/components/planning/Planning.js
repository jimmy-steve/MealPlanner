import React from "react";
import "./Planning.scss";
import WeekCalendar from "../weekCalendar/WeekCalendar";
import { useNavigate } from "react-router-dom";

const Planning = ({userId}) => {
  const history = useNavigate();

  return (
    <div className="container-fluid">
      <WeekCalendar userId={userId} history={history} />
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

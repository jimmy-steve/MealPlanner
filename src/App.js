import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import Login from "./components/Login";
import Header from "./components/Header";
import Frame from "./components/Frame";
import Planning from "./components/Planning";
import AddUser from "./components/AddUser";
import "./App.css";

const UserConnected = ({ setUserInfo, userInfo }) => {
  const history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setUserInfo(null);
    axios.get("http://localhost:8000/api/Auth/user").then(
      (response) => {
        console.log(response.data);
        setUserInfo(response.data.firstName);
      },
      () => {
        if (location.pathname !== "/addUser") {
          history("/login");
        }
      }
    );
  }, [history, setUserInfo, location.pathname]);

  return (
    <>{userInfo && <Header userInfo={userInfo} setUserInfo={setUserInfo} />}</>
  );
};

function App() {
  const [userInfo, setUserInfo] = React.useState("");

  return (
    <div>
      <UserConnected userInfo={userInfo} setUserInfo={setUserInfo} />
      <div className="App">
        <Routes>                  
          <Route path="addUser" element={<AddUser />} />
          <Route path="*" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="frame" element={<Frame />} />
          <Route path="planning" element={<Planning />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Home.scss";
import Sonnet from "./Sonnet";

const Home = () => {
  const [key, setKey] = useState("home");
  




  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto border m-3">







        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 m-1"
        >
          
          <Tab eventKey="home" title="Home" tabClassName="border rounded-top m-1">
            <Sonnet />
          </Tab>
          
          <Tab eventKey="profile" title="Profile" tabClassName="border rounded-top m-1">
            <Sonnet />
          </Tab>
          <Tab eventKey="contact" title="Contact" tabClassName="border rounded-top m-1">
            <Sonnet />
          </Tab>
        </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Frame.scss";

const Frame = () => {
  const [key, setKey] = useState("home");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto border m-3">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="tabs mb-3 m-1"
          >
            <Tab
              eventKey="planning"
              title="Planification de la semaine"                             
              tabClassName="border rounded-top m-1 tab tab--planning"
            >             
            </Tab>

            <Tab
              eventKey="ingredients"
              title="Ingrédients de la semaine"
              tabClassName="border rounded-top m-1 tab tab--ingredients"
            >
            </Tab>
            <Tab
              eventKey="recipes"
              title="Liste des recettes"
              tabClassName="border rounded-top m-1 tab tab--recipes"
            >
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Frame;

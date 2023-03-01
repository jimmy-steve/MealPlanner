import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Frame.scss";
import Planning from "./Planning";
import RecipesList from "./RecipesList";

const Frame = () => {
  const [key, setKey] = useState("planning");
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
            <Planning />
            </Tab>

            <Tab
              eventKey="ingredients"
              title="Ingrédients de la semaine"
              tabClassName="border rounded-top m-1 tab tab--ingredients"
            ></Tab>
            <Tab
              eventKey="recipes"
              title="Liste des recettes"
              tabClassName="border rounded-top m-1 tab tab--recipes"
            >
              <RecipesList />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Frame;

import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./MainFrame.scss";
import Planning from "./Planning";
import RecipesList from "./recipesList/RecipesList";
import IngredientsList from "./ingredientsList/IngredientsList";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const MainFrame = ({ userInfo }) => {
  console.log("userInfo", userInfo);
  const userId = userInfo?.id;
  console.log("userId", userId);

  const navigate = useNavigate();
  let location = useLocation();
  const [key, setKey] = useState("planning");
  const searchParams = new URLSearchParams(location.search);
  const tabKey = searchParams.get("tab") || "planning";

  const [recipes, setRecipes] = useState([]);

  const allRecipes = () => {
    axios
      .get(`http://localhost:8000/api/Recipes?userId=${userId}`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };  

  useEffect(() => {
    allRecipes();
  }, [allRecipes]);

  useEffect(() => {
    setKey(tabKey);
  }, [tabKey]);

  const handleSelect = (k) => {
    setKey(k);
    navigate(`/frame?tab=${k}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto border m-3">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={handleSelect}
            className="tabs mb-3 m-1"
          >
            <Tab
              eventKey="planning"
              title="Planification de la semaine"
              tabClassName="border rounded-top m-1 tab tab--planning"
            >
              <Planning history={navigate} userId={userId} />
            </Tab>

            <Tab
              eventKey="ingredients"
              title="Ingrédients de la semaine"
              tabClassName="border rounded-top m-1 tab tab--ingredients"
            ><IngredientsList />
            </Tab>
            
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

// export default Frame;
//eslint-disable-next-line
export default function (props) {
  const history = useNavigate();
  return <MainFrame {...props} history={history} />;
}

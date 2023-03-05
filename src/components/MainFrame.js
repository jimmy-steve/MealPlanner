import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Planning from "./Planning";
import RecipesList from "./recipesList/RecipesList";
import "./MainFrame.scss";

const API_URL = "http://localhost:8000";

const useActiveTab = (defaultTab) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || defaultTab
  );

  useEffect(() => {
    navigate(`?tab=${activeTab}`);
  }, [activeTab, navigate]);

  return [activeTab, setActiveTab];
};

const MainFrame = ({ userInfo }) => {
  const userId = userInfo?.id;

  const [activeTab, setActiveTab] = useActiveTab("planning");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {      
      try {
        const response = await axios.get(
          `${API_URL}/api/Recipes?userId=${userId}`
        );        
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, [userId]);

  const handleSelect = (k) => {
    setActiveTab(k);
  };

  return (
    <div className="container-fluid gray">
      <div className="row">
        <div className="col-10 mx-auto border m-3">
          <Tabs
            id="controlled-tab-example"
            activeKey={activeTab}
            onSelect={handleSelect}
            className="tabs mb-3 m-1"
          >
            <Tab
              eventKey="planning"
              title="Planification de la semaine"
              tabClassName="border rounded-top m-1 tab tab--planning"
            >
              <Planning userId={userId} />
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
              <RecipesList userId={userId} recipes={recipes} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Recipe from "./Recipe";
const RecipeDetails = () => {
  // const history = useNavigate();
  const [myMealDetail, setMyMealDetail] = React.useState([]);


  const fetchMeal = () => {
    axios
      .get(
        "http://localhost:8000/api/Recipes/1"
      )
      .then((response) => {
        console.log(response.data);
        setMyMealDetail(response.data);
      });
  };

  React.useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <div className="container">
      <h1 className='text-primary' >Les détails d'une recette</h1>
<br />
      <Recipe recipe={myMealDetail} />
    </div>
  );
};

export default RecipeDetails;

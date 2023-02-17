import React from "react";
import "./RecipeListExterne.scss";
import axios from "axios";

const RecipeListExterne = () => {
  // const history = useNavigate();
//https://api.spoonacular.com/recipes/findByIngredients?apiKey=a1d88be59f5843b686ff3cc67f391f1a&ingredients=apples,+flour,+sugar&number=2
 
const [MealList, setMealList] = React.useState([]);

const fetchMealList = () => {
  axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=a1d88be59f5843b686ff3cc67f391f1a&ingredients=apples,+flour,+sugar&number=2', {
    withCredentials: false
  })
  .then(response => {
    console.log(response.data);
    setMealList(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  
};

React.useEffect(() => {
  // fetchMealList();
}, []);






return (
  <div className="container">
    <h1>Ma liste de recette Externe</h1>
    <div className="row">
      {MealList.map(meal => (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={meal.id}>
          <div className="card">
            <img src={meal.image} className="card-img-top" alt={meal.title} />
            <div className="card-body">
              <h5 className="card-title">{meal.title}</h5>
              <p className="card-text">{meal.usedIngredients.length} ingrédients utilisés</p>
              <a href={`https://spoonacular.com/recipes/${meal.id}`} target="_blank" rel="noreferrer" className="btn btn-primary">Voir la recette</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default RecipeListExterne;

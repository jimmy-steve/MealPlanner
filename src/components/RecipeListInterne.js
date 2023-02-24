import React from "react";
import axios from "axios";
import "./RecipeListInterne.scss";

const RecipeListInterne = () => {
  const [MealList, setMealList] = React.useState([]);

  const fetchMealListWithIngredient = () => {
    axios.get("http://localhost:8000/api/Recipes").then((response) => {
      console.log(response.data);
      setMealList(response.data);
    });
  };

  React.useEffect(() => {
    fetchMealListWithIngredient();
  }, []);

  return (
    <div className="container">
      <h1>Ma liste de recette Interne</h1>
      <br />

      <div class="container bootdey">
        <div class="col-md-3"></div>

        <div className="col-md-9">
          <div className="row product-list">
            {MealList.map((meal) => (
              <div key={meal.id} className="col-md-4">
                <section className="panel">
                  <div className="pro-img-box">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzs4h10arHiLclcE1s9JQv4Ae7AiiCAcPIfg&usqp=CAU"
                      alt=""
                    />
                    <div className="adtocart">
                      <i className="fa">+</i>
                    </div>
                  </div>

                  <div className="panel-body text-center">
                    <h4>
                      <div className="pro-title">{meal.title}</div>
                    </h4>
                    <p className="price">
                      Nombre de portions : {meal.servings}
                    </p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeListInterne;

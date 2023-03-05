import dayjs from "dayjs";
import "dayjs/locale/fr"; // importer la locale "fr"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddRecipeButton from "./AddRecipeButton";
import CardRecipe from "./CardRecipe";
import DetailModal from "./DetailModal";
import "./WeekCalendar.scss";

function WeekCalendar({ props, dayList }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleModalShow = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedRecipe(null);
    setShowModal(false);
  };

  // trouver la semaine courante
  const [currentWeek, setCurrentWeek] = useState(dayjs().startOf("week"));
  // initialiser une liste de recettes pour chaque jour de la semaine
  const [mondayRecipes, setMondayRecipes] = useState([]);
  const [tuesdayRecipes, setTuesdayRecipes] = useState([]);
  const [wednesdayRecipes, setWednesdayRecipes] = useState([]);
  const [thursdayRecipes, setThursdayRecipes] = useState([]);
  const [fridayRecipes, setFridayRecipes] = useState([]);
  const [saturdayRecipes, setSaturdayRecipes] = useState([]);
  const [sundayRecipes, setSundayRecipes] = useState([]);

  useEffect(() => {
    const currentWeekStart = currentWeek.startOf("week");
    const currentWeekEnd = currentWeek.endOf("week");
    dayList.forEach(({ date, recipe }) => {
      const parsedDate = dayjs(date);
      if (parsedDate.isBefore(currentWeekStart)) {
        console.log(`${date} est avant la semaine en cours`);
      } else if (parsedDate.isAfter(currentWeekEnd)) {
        console.log(`${date} est après la semaine en cours`);
      } else {
        console.log(`${date} est dans la semaine en cours`);
        const dayIndex = parsedDate.day();
        switch (dayIndex) {
          case 0:
            console.log("adding recipe to sundayRecipes", parsedDate);
            setSundayRecipes((prev) => [...prev, recipe]);
            break;
          case 1:
            console.log("adding recipe to mondayRecipes", parsedDate);
            setMondayRecipes((prev) => [...prev, recipe]);
            break;
          case 2:
            console.log("adding recipe to tuesdayRecipes", parsedDate);
            setTuesdayRecipes((prev) => [...prev, recipe]);
            break;
          case 3:
            console.log("adding recipe to wednesdayRecipes", parsedDate);
            setWednesdayRecipes((prev) => [...prev, recipe]);
            break;
          case 4:
            console.log("adding recipe to thursdayRecipes", parsedDate);
            setThursdayRecipes((prev) => [...prev, recipe]);
            break;
          case 5:
            console.log("adding recipe to fridayRecipes", parsedDate);
            setFridayRecipes((prev) => [...prev, recipe]);
            break;
          case 6:
            console.log("adding recipe to saturdayRecipes", parsedDate);
            setSaturdayRecipes((prev) => [...prev, recipe]);
            break;
          default:
            break;
        }
      }
    });
  }, [dayList, currentWeek]);

  const handleRecipeClick = (cell, index) => {
    if (!cell.active) {
      console.log("La case est inactive");
      return;
    }

    const recipe = cell.recipes[index];
    console.log(
      `Clicked on recipe ${recipe.recipeId} ${recipe.title} on ${cell.date} ${cell.active}`
    );
    handleModalShow(recipe);
  };

  const addRecipe = () => {
    //TODO Creer un journée lors du clique comme sa lorsqu'on on choisi une recette la journée est déja creer
    const eventKey = "recipes";
    const searchParams = new URLSearchParams();
    searchParams.append("tab", eventKey);
    navigate("/frame?" + searchParams.toString());
  };

  function prevWeek() {
    const newCurrentWeek = currentWeek.subtract(1, "week");
    setCurrentWeek(newCurrentWeek);
  }

  function nextWeek() {
    const newCurrentWeek = currentWeek.add(1, "week");
    setCurrentWeek(newCurrentWeek);
  }

  function renderDays() {
    const days = [];
    const startOfWeek = currentWeek.startOf("week");
    const weekRecipes = [
      sundayRecipes,
      mondayRecipes,
      tuesdayRecipes,
      wednesdayRecipes,
      thursdayRecipes,
      fridayRecipes,
      saturdayRecipes,
    ];

    for (let i = 0; i < 7; i++) {
      const date = startOfWeek.add(i, "day");
      const recipes = weekRecipes[i];
      const cell = { date: date, recipes: recipes, active: recipes.length > 0 };

      days.push(
        <div key={date.toString()} className="week-calendar__day border mt-3">
          <div className="week-calendar__day-label text-start mx-3">
            {date.locale("fr").format("dddd")}
            <span className="week-calendar__day-number mx-3 text-end">
              {date.format("D")}
            </span>
          </div>
          {cell.recipes.map((recipe, j) => (
            <div
              key={`${date.toString()}-${j}`}
              className="week-calendar__day-cell col-10"
              onClick={() => handleRecipeClick(cell, j)}
            >
              <CardRecipe
                key={j}
                recipeId={recipe.recipeId}
                title={recipe.title}
                pictureUrl={recipe.pictureUrl}
                index={j}
              />
            </div>
          ))}
          {/* Ajouter une case vide si aucune recette n'est planifiée */}
          {!cell.active && (
            <div className="week-calendar__day-cell col-10">
              <div className="card empty-card"></div>
              <AddRecipeButton addRecipe={addRecipe} />
              <AddRecipeButton addRecipe={addRecipe} />
              <AddRecipeButton addRecipe={addRecipe} />
            </div>
          )}
        </div>
      );
    }
    return days;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="week-calendar">
          <div className="week-calendar__header">
            <button onClick={prevWeek} className="btn">
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <button onClick={nextWeek} className="btn">
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
            <div className="mx-3">
              <h2 className="">
                {currentWeek.locale("fr").format("D MMMM")} -{" "}
                {currentWeek.add(6, "day").locale("fr").format("D MMMM YYYY")}
              </h2>
            </div>
            <button className="btn">
              <span className="material-symbols-outlined ml-5">
                arrow_drop_down
              </span>
            </button>
          </div>
          <div className="week-calendar__body">{renderDays()}</div>
        </div>
      </div>

      <DetailModal
        selectedRecipe={selectedRecipe}
        showModal={showModal}
        handleModalClose={handleModalClose}
      />
    </>
  );
}

// export default WeekCalendar;
//eslint-disable-next-line
export default function (props) {
  const history = useNavigate();
  return <WeekCalendar {...props} history={history} />;
}

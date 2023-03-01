import dayjs from "dayjs";
import "dayjs/locale/fr"; // importer la locale "fr"
import "./WeekCalendar.scss";
import React, { useState } from "react";
import CardRecipe from "./CardRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function WeekCalendar({ props, dayList }) {
  console.log("On est dans WeekCalendar");
  console.log("dayList", dayList);
  const navigate = useNavigate();

  const [currentWeek, setCurrentWeek] = useState(dayjs().startOf("week"));

  const weekDays = [
    dayjs().startOf("week").add(1, "day"),
    dayjs().startOf("week").add(2, "day"),
    dayjs().startOf("week").add(3, "day"),
    dayjs().startOf("week").add(4, "day"),
    dayjs().startOf("week").add(5, "day"),
    dayjs().startOf("week").add(6, "day"),
    dayjs().startOf("week").add(7, "day"),
  ];

  // initialiser une liste de recettes pour chaque jour de la semaine
  const [mondayRecipes, setMondayRecipes] = useState([
    { name: "Recette 1", date: weekDays[0] },
    { name: "Recette 2", date: weekDays[0] },
    { name: "Empty", date: weekDays[0] },
  ]);
  const [tuesdayRecipes, setTuesdayRecipes] = useState([
    { name: "Recette 3", date: weekDays[1] },
  ]);
  const [wednesdayRecipes, setWednesdayRecipes] = useState([]);
  const [thursdayRecipes, setThursdayRecipes] = useState([]);
  const [fridayRecipes, setFridayRecipes] = useState([]);
  const [saturdayRecipes, setSaturdayRecipes] = useState([]);
  const [sundayRecipes, setSundayRecipes] = useState([
    { name: "Recette 4", date: weekDays[6] },
  ]);

  const handleRecipeClick = (cell, index) => {
    const recipe = cell.recipes[index];
    console.log(
      `Clicked on recipe ${recipe.label} on ${cell.date} ${cell.active}`
    );

    if (!cell.active) {
      console.log("La case est inactive");
      return;
    }

    const updatedRecipes = cell.recipes.map((recipe, i) => {
      if (i === index) {
        return { ...recipe, deleted: true };
      }
      return recipe;
    });

    switch (cell.date.getDay()) {
      case 1:
        setMondayRecipes(updatedRecipes);
        break;
      case 2:
        setTuesdayRecipes(updatedRecipes);
        break;
      case 3:
        setWednesdayRecipes(updatedRecipes);
        break;
      case 4:
        setThursdayRecipes(updatedRecipes);
        break;
      case 5:
        setFridayRecipes(updatedRecipes);
        break;
      case 6:
        setSaturdayRecipes(updatedRecipes);
        break;
      case 0:
        setSundayRecipes(updatedRecipes);
        break;
      default:
        break;
    }
  };

  const addRecipe = () => {
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
      mondayRecipes,
      tuesdayRecipes,
      wednesdayRecipes,
      thursdayRecipes,
      fridayRecipes,
      saturdayRecipes,
      sundayRecipes,
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
              <CardRecipe key={j} label={recipe.name} index={j} />
            </div>
          ))}
          {/* Ajouter une case vide si aucune recette n'est planifiée */}
          {!cell.active && (
            <div className="week-calendar__day-cell col-10">
              <div className="card empty-card"></div>
              <button
                className="btn btn-outline-secondary empty-card-btn"
                onClick={addRecipe}
              >
                + Ajouter une recette
              </button>
            </div>
          )}
        </div>
      );
    }
    return days;
  }

  return (
    <div className="container-fluid">
      <div className="week-calendar">
        <div className="week-calendar__header">
          <button onClick={prevWeek} className="btn">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <button onClick={nextWeek} className="btn">
            <span className="material-symbols-outlined">arrow_forward_ios</span>
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
  );
}

// export default WeekCalendar;
//eslint-disable-next-line
export default function (props) {
  const history = useNavigate();
  return <WeekCalendar {...props} history={history} />;
}

import dayjs from "dayjs";
import "dayjs/locale/fr"; // importer la locale "fr"
import "./WeekCalendar.scss";
import React, { useState } from "react";
import CardRecipe from "./CardRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function WeekCalendar({ props, dayList }) {
  console.log("On est dans WeekCalendar");
  console.log("dayList", dayList);
  const navigate = useNavigate();

  const [currentWeek, setCurrentWeek] = useState(dayjs().startOf("week"));

  // initialiser une liste de recettes pour chaque jour de la semaine
  const [mondayRecipes, setMondayRecipes] = useState([]);
  const [tuesdayRecipes, setTuesdayRecipes] = useState([]);
  const [wednesdayRecipes, setWednesdayRecipes] = useState([]);
  const [thursdayRecipes, setThursdayRecipes] = useState([]);
  const [thursdayRecipesName, setThursdayRecipesName] = useState([]);
  const [fridayRecipes, setFridayRecipes] = useState([]);
  const [saturdayRecipes, setSaturdayRecipes] = useState([]);
  const [sundayRecipes, setSundayRecipes] = useState([]);

  useEffect(() => {
    console.log("dayList", dayList);
    const dateList = dayList.map((day) => day.date);
    console.log("dateList", dateList);

    const date1 = dayjs("2022-03-01T00:00:00");
    const date2 = dayjs("2022-03-01T00:00:00");

    if (date1.isSame(date2, "day")) {
      console.log("Les dates sont égales");
    } else {
      console.log("Les dates sont différentes");
    }

    dateList.forEach((date) => {
      const parsedDate = dayjs(date.date);
      const dayOfWeek = parsedDate.format("dddd").toLowerCase();
      console.log("dayOfWeek", dayOfWeek);

      // const recipeList = date.recipes.map(recipe => recipe.name);

      switch (dayOfWeek) {
        case "monday":
          console.log("adding date to mondayRecipes", parsedDate);
          setMondayRecipes((prev) => [...prev, date]);
          // setMondayRecipes(recipeList);
          break;
        case "tuesday":
          console.log("adding date to tuesdayRecipes", parsedDate);
          setTuesdayRecipes((prev) => [...prev, date]);
          // setTuesdayRecipes(recipeList);
          break;
        case "wednesday":
          console.log("adding date to wednesdayRecipes", parsedDate);
          setWednesdayRecipes((prev) => [...prev, date]);
          // setWednesdayRecipes(recipeList);
          break;
        case "thursday":
          console.log("adding date to thursdayRecipes", parsedDate);
          setThursdayRecipes((prev) => [...prev, date]);
          //  setThursdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
          break;
        case "friday":
          console.log("adding date to fridayRecipes", parsedDate);
          setFridayRecipes((prev) => [...prev, date]);
          // setFridayRecipes(recipeList);
          break;
        case "saturday":
          console.log("adding date to saturdayRecipes", parsedDate);
          setSaturdayRecipes((prev) => [...prev, date]);
          // setSaturdayRecipes(recipeList);
          break;
        case "sunday":
          console.log("adding date to sundayRecipes", parsedDate);
          setSundayRecipes((prev) => [...prev, date]);
          // setSundayRecipes(recipeList);
          break;
        default:
          break;
      }
    });
  }, [dayList]);

  console.log("mondayRecipes", mondayRecipes);

  const handleRecipeClick = (cell, index) => {
    const recipe = cell.recipes[index];
    console.log(
      `Clicked on recipe ${recipe.label} on ${cell.date} ${cell.active}`
    );

    if (!cell.active) {
      console.log("La case est inactive");
      return;
    }

    switch (cell.date.getDay()) {
      case 1:
        setMondayRecipes((prevRecipes) => [...prevRecipes, recipe]);
        break;
      case 2:
        setTuesdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
        break;
      case 3:
        setWednesdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
        break;
      case 4:
        setThursdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
        break;
      case 5:
        setFridayRecipes((prevRecipes) => [...prevRecipes, recipe]);
        break;
      case 6:
        setSaturdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
        break;
      case 0:
        setSundayRecipes((prevRecipes) => [...prevRecipes, recipe]);
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
              <CardRecipe key={j} label={thursdayRecipesName} index={j} />
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

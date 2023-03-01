import dayjs from "dayjs";
import "dayjs/locale/fr"; // importer la locale "fr"
import "./WeekCalendar.scss";
import React, { useState } from "react";
import CardRecipe from "./CardRecipe";
import axios from "axios";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function WeekCalendar({ userInfo }) {
  // const userId = userInfo.id;
  // console.log("userId", userId);

  const [currentWeek, setCurrentWeek] = useState(dayjs().startOf("week"));
  const [recipeList, setRecipeList] = useState([]);
  const [cells, setCells] = useState([]);

//   const weekDays = [
//     dayjs().startOf("week").add(1, "day"),
//     dayjs().startOf("week").add(2, "day"),
//     dayjs().startOf("week").add(3, "day"),
//     dayjs().startOf("week").add(4, "day"),
//     dayjs().startOf("week").add(5, "day"),
//     dayjs().startOf("week").add(6, "day"),
//     dayjs().startOf("week").add(7, "day"),
//   ];

//   // initialiser une liste pour chaque jour de la semaine
//   const [mondayList, setMondayList] = useState([]);
//   const [tuesdayList, setTuesdayList] = useState([]);
//   const [wednesdayList, setWednesdayList] = useState([]);
//   const [thursdayList, setThursdayList] = useState([]);
//   const [fridayList, setFridayList] = useState([]);
//   const [saturdayList, setSaturdayList] = useState([]);
//   const [sundayList, setSundayList] = useState([]);

  // useEffect(() => {
  //   var userIdTest = 1;
  //   axios
  //     .get("http://localhost:8000/api/Recipes/getRecipeByUser/" + userIdTest)
  //     .then((response) => {
  //       console.log(response.data);
  //       setCells(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleRecipeClick = (cell, index) => {
    const recipe = cell.recipes[index];
    console.log(
      `Clicked on recipe ${recipe.label} on ${cell.date} ${cell.active}`
    );
    // Ajoutez ici le code pour gérer le clic sur la recette avec la date correspondante
    console.log("Selected cell:", cell);
    if (!cell.active) {
      console.log("La case est inactive");
    } else {
      console.log("La case est active");
    }

    // Ajouter un bouton de suppression
    cell.recipes[index] = {
      label: recipe.label,
      deleted: true, // Ajouter un indicateur pour supprimer la recette
    };
    setCells([...cells]); // Mettre à jour la liste de cellules
  };

  // const addRecipe = (cell, recipe) => {
  //     cell.recipes.push({label: recipe, deleted: false});
  //     setCells([...cells]);
  // };

  // function addRecipe(newRecipe) {
  //     setRecipeList([...recipeList, newRecipe]);
  // }

  function handleDeleteRecipe(index) {
    const updatedRecipeList = [...recipeList];
    updatedRecipeList.splice(index, 1);
    setRecipeList(updatedRecipeList);
  }

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

    for (let i = 0; i < 7; i++) {
      const date = startOfWeek.add(i, "day");
      const recipes = [
        { label: "Recette 1" },
        { label: "Recette 2" },
        { label: "Recette 3" },
      ];
      const cell = { date: date, recipes: recipes, active: recipes.length > 0 }; // Ajout de la propriété "active"
      days.push(
        <div key={date.toString()} className="week-calendar__day border mt-3">
          <div className="week-calendar__day-label text-start mx-3">
            {date.locale("fr").format("dddd")}
            <span className="week-calendar__day-number mx-3 text-end">
              {date.format("D")}
            </span>
          </div>
          {/* Utiliser la méthode "locale" pour définir la locale "fr" et la méthode "format" pour spécifier le format */}
          {cell.recipes.map((recipe, j) => (
            <div
              key={`${date.toString()}-${j}`}
              className="week-calendar__day-cell col-10"
              onClick={() => handleRecipeClick(cell, j)}
            >
              <CardRecipe
                key={j}
                label={recipe.label}
                index={j}
                onDelete={handleDeleteRecipe}
              />
            </div>
          ))}
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

export default WeekCalendar;

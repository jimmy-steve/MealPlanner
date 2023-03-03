import dayjs from "dayjs";
import "dayjs/locale/fr"; // importer la locale "fr"
import "./WeekCalendar.scss";
import React, { useState } from "react";
import CardRecipe from "./CardRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function WeekCalendar({ props, dayList }) {
  console.log("On est dans WeekCalendar");
  console.log("dayList", dayList);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  
  const handleModalShow = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedRecipe(null);
    setShowModal(false);
  };

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
    const dateList = dayList.map((day) => day.date);
    const currentWeekStart = currentWeek.startOf("week");
    const currentWeekEnd = currentWeek.endOf("week");
    dateList.forEach((date) => {
      const parsedDate = dayjs(date.date);
      if (parsedDate.isBefore(currentWeekStart)) {
        console.log(`${date} est avant la semaine en cours`);
      } else if (parsedDate.isAfter(currentWeekEnd)) {
        console.log(`${date} est après la semaine en cours`);
      } else {
        console.log(`${date} est dans la semaine en cours`);
        const dayIndex = parsedDate.day();
        switch (dayIndex) {
          case 0:
            console.log("adding date to sundayRecipes", parsedDate);
            setSundayRecipes((prev) => [...prev, date]);
            break;
          case 1:
            console.log("adding date to mondayRecipes", parsedDate);
            setMondayRecipes((prev) => [...prev, date]);
            break;
          case 2:
            console.log("adding date to tuesdayRecipes", parsedDate);
            setTuesdayRecipes((prev) => [...prev, date]);
            break;
          case 3:
            console.log("adding date to wednesdayRecipes", parsedDate);
            setWednesdayRecipes((prev) => [...prev, date]);
            break;
          case 4:
            console.log("adding date to thursdayRecipes", parsedDate);
            setThursdayRecipes((prev) => [...prev, date]);
            break;
          case 5:
            console.log("adding date to fridayRecipes", parsedDate);
            setFridayRecipes((prev) => [...prev, date]);
            break;
          case 6:
            console.log("adding date to saturdayRecipes", parsedDate);
            setSaturdayRecipes((prev) => [...prev, date]);
            break;
          default:
            break;
        }
      }
    });
  }, [dayList, currentWeek]);

  const handleRecipeClick = (cell, index) => {
    const recipe = cell.recipes[index];
    console.log(
      `Clicked on recipe ${recipe.label} on ${cell.date} ${cell.active}`
    );
    // console.log(`Clicked on recipe with id ${recipeId}`);
    handleModalShow(recipe);

    if (!cell.active) {
      console.log("La case est inactive");
      return;
    }

    // switch (cell.date.getDay()) {
    //   case 1:
    //     setMondayRecipes((prevRecipes) => [...prevRecipes, recipe]);
    //     break;
    //   case 2:
    //     setTuesdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
    //     break;
    //   case 3:
    //     setWednesdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
    //     break;
    //   case 4:
    //     setThursdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
    //     break;
    //   case 5:
    //     setFridayRecipes((prevRecipes) => [...prevRecipes, recipe]);
    //     break;
    //   case 6:
    //     setSaturdayRecipes((prevRecipes) => [...prevRecipes, recipe]);
    //     break;
    //   case 0:
    //     setSundayRecipes((prevRecipes) => [...prevRecipes, recipe]);
    //     break;

    //   default:
    //     break;
    // }
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
                label={"exemple"}
                index={j}
              />
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

      {/* Modal */}
      {selectedRecipe && (
        <Modal show={showModal} onHide={handleModalClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe.label}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={"/lasagne.jpg"}
                    className="img-fluid rounded-start"
                    alt="recette"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

// export default WeekCalendar;
//eslint-disable-next-line
export default function (props) {
  const history = useNavigate();
  return <WeekCalendar {...props} history={history} />;
}

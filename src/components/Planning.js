import React from "react";
import axios from "axios";
import "./Planning.scss";
import ScheduleTable from "./ScheduleTable";
import RecipeList from "./RecipeList";
import { useNavigate } from "react-router-dom";
import "./calendar.scss";
import { DayName } from "./day-name.js";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Planning = () => {
  const history = useNavigate();
  const [scheduleData, setScheduleData] = React.useState([]);

  const [MealList, setMealList] = React.useState([]);
  const [events, setEvents] = React.useState([]);

  // const fetchDayListByUser = () => {
  //   var userId = 100;
  //   axios
  //     .get("http://localhost:8000/api/Days/"+userId+"/byUserIdWithRecipe")
  //     .then((response) => {
  //       console.log(response.data);
  //       setMealList(response.data);
  //     });
  // };

  const fetchRecipeListByUser = () => {
    const startOfWeek = moment().startOf("week");
    const endOfWeek = moment().endOf("week");
    const eventList = [
      /* Liste des événements retournée par votre API */
    ];
    const schedule = [];

    var userId = 1;
    axios
      .get(
        "http://localhost:8000/api/Recipes/getRecipesForCurrentWeek/" + userId
      )
      .then((response) => {
        console.log(response.data);

        // Boucle sur chaque jour de la semaine
        for (
          let day = startOfWeek;
          day <= endOfWeek;
          day = day.clone().add(1, "d")
        ) {
          const dayEvents = eventList.filter((event) =>
            moment(event.start).isSame(day, "day")
          );

          schedule.push({
            date: day.format("YYYY-MM-DD"),
            events: dayEvents,
          });
        }

        // Passer le calendrier mis à jour en tant que prop à la composante ScheduleTable
        <ScheduleTable schedule={schedule} />;

        setScheduleData(response.data);
        const mappedEvents = response.data.map((recipe) => ({
          title: recipe.title,
          start: new Date(recipe.days[0].date),
          end: new Date(recipe.days[0].date),
        }));
        setEvents(mappedEvents);
      });
  };

  React.useEffect(() => {
    fetchRecipeListByUser();
  }, []);

  // const events = [
  //   {
  //     start: new Date(),
  //     end: new Date(moment().add(1, 'days')),
  //     title: 'Some event',
  //   },
  //   {
  //     start: new Date(moment().add(3, 'days')),
  //     end: new Date(moment().add(4, 'days')),
  //     title: 'Another event',
  //   },
  // ];

  const getDayName = (day) => {
    switch (day) {
      case DayName.SUNDAY:
        return "Dimanche";
      case DayName.MONDAY:
        return "Lundi";
      case DayName.TUESDAY:
        return "Mardi";
      case DayName.WEDNESDAY:
        return "Mercredi";
      case DayName.THURSDAY:
        return "Jeudi";
      case DayName.FRIDAY:
        return "Vendredi";
      case DayName.SATURDAY:
        return "Samedi";
      default:
        return "";
    }
  };

  // const scheduleData = [
  //   [
  //     {
  //       active: true,
  //       title: "Pita au poulet",
  //       activity: "Préparer un gâteau",
  //       time: "10h00-12h00",
  //       instructor: "Chef X",
  //       image: require("./image1.jpg"),
  //     },
  //     { active: false },
  //     {
  //       active: true,
  //       title: "Macaroni Au poulet",
  //       activity: "Préparer des pâtes fraîches",
  //       time: "13h00-15h00",
  //       instructor: "Chef Y",
  //       image: require("./image1.jpg"),
  //     },
  //     { active: false },
  //     {
  //       active: true,
  //       title: "Spaghetti",
  //       activity: "Cuisiner avec des herbes aromatiques",
  //       time: "16h00-18h00",
  //       instructor: "Chef Z",
  //       image: require("./image1.jpg"),
  //     },
  //     { active: false },
  //     { active: false },
  //   ],
  //   [
  //     { active: false },
  //     {
  //       active: true,
  //       title: "Soupe au Crabe",
  //       activity: "Préparer des plats végétariens",
  //       time: "10h00-12h00",
  //       instructor: "Chef A",
  //       image: require("./image1.jpg"),
  //     },
  //     { active: false },
  //     { active: false },
  //     {
  //       active: true,
  //       title: "Salate de poulet",
  //       activity: "Cuisiner avec des épices",
  //       time: "14h00-16h00",
  //       instructor: "Chef B",
  //       image: require("./image1.jpg"),
  //     },
  //     { active: false },
  //     { active: false },
  //   ],
  //   [
  //     { active: false },
  //     { active: false },
  //     {
  //       active: true,
  //       title: "Lasagne",
  //       activity: "Préparer des soupes",
  //       time: "10h00-12h00",
  //       instructor: "Chef C",
  //       image: require("./image1.jpg"),
  //     },
  //     { active: false },
  //     { active: false },
  //     {
  //       active: true,
  //       title: "Pizza aux crevettes",
  //       activity: "Cuisiner avec des légumes de saison",
  //       time: "14h00-16h00",
  //       instructor: "Chef D",
  //       image: require("./image1.jpg"),
  //     },
  //     { active: false },
  //   ],
  // ];

  const handleCellClick = (cell) => {
    console.log("Selected cell:", cell);
    if (!cell.active) {
      history("/RecipeListInterne");
    }

    if (cell.active) {
      history("/RecipeDetails");
    }
  };

  return (
    <div className="container-fluid">
      <h1>Mon Planning</h1>

      <div className="container-fluid">
        <div className="col-10 mx-auto">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </div>
      <br></br>
      <hr class="border border-danger border-3 opacity-75" />
      <br></br>

      <div className="container-fluid">
        <div className="col-10 mx-auto">
          {/* <ScheduleTable
            schedule={scheduleData}
            onCellClick={handleCellClick}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Planning;

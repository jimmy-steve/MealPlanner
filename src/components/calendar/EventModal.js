import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  const [pictureUrl, setPictureUrl] = useState(
    selectedEvent ? selectedEvent.pictureUrl : ""
  );
  const [sourceUrl, setSourceUrl] = useState(
    selectedEvent ? selectedEvent.sourceUrl : ""
  );
  const [instructions, setInstructions] = useState(
    selectedEvent ? selectedEvent.instructions : ""
  );
  const [servings, setServings] = useState(
    selectedEvent ? selectedEvent.servings : ""
  );
  const [preparationTime, setPreparationTime] = useState(
    selectedEvent ? selectedEvent.preparationTime : ""
  );
  const [cookingTime, setCookingTime] = useState(
    selectedEvent ? selectedEvent.cookingTime : ""
  );
  const [isDeleted, setIsDeleted] = useState(
    selectedEvent ? selectedEvent.isDeleted : false
  );
  const [note, setNote] = useState(selectedEvent ? selectedEvent.note : "");

  function handleSubmit(e) {
    e.preventDefault();

    const recipe = {
      title,
      pictureUrl,
      sourceUrl,
      instructions,
      servings,
      preparationTime,
      cookingTime,
      isDeleted,
      note,
    };

    console.log(recipe);

    // const recipeTest = {
    //   title: "Poulet rôti",
    //   pictureUrl: "https://www.example.com/images/poulet-roti.jpg",
    //   sourceUrl: "https://www.example.com/poulet-roti",
    //   instructions: "Préchauffez le four à 200°C. Disposez le poulet dans un plat allant au four et enfournez pendant 1h30 en l'arrosant régulièrement avec son jus. Servez chaud.",
    //   servings: 4,
    //   preparationTime: 15,
    //   cookingTime: 90,
    //   isDeleted: false,
    //   note: "Cette recette est facile et délicieuse !"
    // };

    fetch("http://localhost:8000/api/Recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // handle successful response
      })
      .catch((error) => {
        console.error("There was an error:", error);
        // handle error
      });

    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid items-end gap-y-7">
            <div></div>
            {/* <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            /> */}
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />




    <input
    className=" form-control"
      type="text"
      name="title"
      placeholder="Ajouter un titre"
      value={title}
      required
      onChange={(e) => setTitle(e.target.value)}
    />


    <input
      className="form-control "
      type="text"
      name="pictureUrl"
      placeholder="Ajouter une URL pour l'image"
      value={pictureUrl}
      required
      onChange={(e) => setPictureUrl(e.target.value)}
    />


    <input
        className="form-control"
      type="text"
      name="sourceUrl"
      placeholder="Ajouter une URL pour la source"
      value={sourceUrl}
      required
      onChange={(e) => setSourceUrl(e.target.value)}
    />



    <textarea
      className="form-control"
      name="instructions"
      placeholder="Ajouter les instructions"
      value={instructions}
      required
      onChange={(e) => setInstructions(e.target.value)}
    ></textarea>


    <input
      className="form-control"
      type="number"
      name="servings"
      placeholder="Ajouter le nombre de portions"
      value={servings}
      required
      onChange={(e) => setServings(e.target.value)}
    />


    <input
      className="form-control"
      type="number"
      name="preparationTime"
      placeholder="Ajouter le temps de préparation"
      value={preparationTime}
      required
      onChange={(e) => setPreparationTime(e.target.value)}
    />


    <input
      className="form-control"
      type="number"
      name="cookingTime"
      placeholder="Ajouter le temps de cuisson"
      value={cookingTime}
      required
      onChange={(e) => setCookingTime(e.target.value)}
    />


    <textarea
      className="form-control"
      name="note"
      placeholder="Ajouter une note"
      value={note}
      onChange={(e) => setNote(e.target.value)}
    ></textarea>








            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

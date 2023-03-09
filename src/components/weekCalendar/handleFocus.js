import axios from "axios";

export function handleFocus(setDayList, userId) {
    console.log("UserID: " + userId);
    console.log("Tab focused + get dans le backend");
    const fetchDayListByUser = () => {
        var userIdTest = 100;
        axios
          .get(
            "http://localhost:8000/api/Recipes/users/" +
            userIdTest +
              "/recipes/WithDate"
          )
          .then((response) => {
            setDayList(response.data);
          });
      };
    // recalculer le tableau ici
    fetchDayListByUser();
  }
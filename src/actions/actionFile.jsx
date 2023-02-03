import React from "react";
import App from "../App";

export const fetchData = ({connect}) => dispatch => {
    fetch("https://covidnigeria.herokuapp.com/api")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: "FETCH_DATA",
          payload: data
        })
      );
  };
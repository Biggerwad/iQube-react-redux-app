import React from "react";
const initialState = {
    data: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          ...state,
          data: action.payload
        };
      default:
        return state;
    }
  }
  
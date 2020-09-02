import { registerRootComponent } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";

const initialState = {
  msg: [],
  markers: [],
  isEditting: false,
  current_location: {
    latitude: 37.258450608156714,
    longitude: 127.03119222074746,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "markerAdd":
      return {
        ...state,
        markers: [
          ...state.markers,
          {
            title: action.title,
            description: action.desc,
            shareFriends: action.share,
            coordinate: action.coordinate,
          },
        ],
      };
    case "switching":
      return {
        ...state,
        isEditting: !state.isEditting,
      };
    case "changeLocation":
      return {
        ...state,
        current_location: {
          latitude: action.latitude,
          longitude: action.longitude,
        },
      };
    case "Update":
      return {
        ...state,
        msg: [
          ...state.msg,
          {
            name: action.name,
            message: action.message,
            createAt: action.date,
          },
        ],
      };
    default:
      return {
        ...state,
      };
  }
};

const store = createStore(reducer);

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default registerRootComponent(AppContainer);

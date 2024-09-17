import React, { createContext, useReducer, useContext } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green',         // Current light color
  pedestrianRequested: false,    // Whether pedestrian requested crossing
  emergencyOverride: false,      // Emergency vehicle request
  timer: 10                      // Countdown timer for current light
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload, timer: action.timer };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequested: true };
    case 'EMERGENCY_OVERRIDE':
      return { ...state, emergencyOverride: true, currentLight: 'red', timer: 5 };
    case 'RESET_TIMER':
      return { ...state, timer: action.timer };
    default:
      return state;
  }
};

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export const useTrafficLightContext = () => useContext(TrafficLightContext);

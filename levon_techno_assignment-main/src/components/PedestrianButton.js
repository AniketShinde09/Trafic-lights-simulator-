import React from 'react';
import { useTrafficLightContext } from '../context/TrafficLightContext';

const PedestrianButton = () => {
  const { dispatch } = useTrafficLightContext();

  const requestCrossing = () => {
    dispatch({ type: 'REQUEST_CROSSING' });
  };

  return (
    <button onClick={requestCrossing} className="pedestrian-button">
      Request Pedestrian Crossing
    </button>
  );
};

export default PedestrianButton;

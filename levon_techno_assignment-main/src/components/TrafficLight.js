import React, { useEffect } from 'react';
import { useTrafficLightContext } from '../context/TrafficLightContext';

const TrafficLight = () => {
  const { state, dispatch } = useTrafficLightContext();
  const { currentLight, pedestrianRequested, timer } = state;

  // Timer logic for changing lights
  useEffect(() => {
    let interval;
    
    if (!state.emergencyOverride) {
      interval = setInterval(() => {
        if (timer > 0) {
          dispatch({ type: 'RESET_TIMER', timer: timer - 1 });
        } else {
          changeLight();
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, currentLight, pedestrianRequested]);

  const changeLight = () => {
    if (pedestrianRequested && currentLight === 'green') {
      dispatch({ type: 'CHANGE_LIGHT', payload: 'red', timer: 5 });
    } else if (currentLight === 'green') {
      dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow', timer: 3 });
    } else if (currentLight === 'yellow') {
      dispatch({ type: 'CHANGE_LIGHT', payload: 'red', timer: 7 });
    } else if (currentLight === 'red') {
      dispatch({ type: 'CHANGE_LIGHT', payload: 'green', timer: 10 });
    }
  };

  return (
    <div className="traffic-light">
      <div className={`light ${currentLight === 'red' ? 'active red' : 'red'}`} />
      <div className={`light ${currentLight === 'yellow' ? 'active yellow' : 'yellow'}`} />
      <div className={`light ${currentLight === 'green' ? 'active green' : 'green'}`} />
      <div className="timer">{timer}s</div>
    </div>
  );
};

export default TrafficLight;

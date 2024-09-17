import React from 'react';
import { useTrafficLightContext } from '../context/TrafficLightContext';

const EmergencyOverrideButton = () => {
  const { dispatch } = useTrafficLightContext();

  const emergencyOverride = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE' });
  };

  return (
    <button onClick={emergencyOverride} className="emergency-button">
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;

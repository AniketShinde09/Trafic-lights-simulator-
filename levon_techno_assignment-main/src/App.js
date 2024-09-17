import React from 'react';
import { TrafficLightProvider } from './context/TrafficLightContext';
import TrafficLight from './components/TrafficLight';
import PedestrianButton from './components/PedestrianButton';
import EmergencyOverrideButton from './components/EmergencyOverrideButton';
import './App.css';

function App() {
  return (
    <TrafficLightProvider>
      <div className="app">
        <TrafficLight />
        <PedestrianButton />
        <EmergencyOverrideButton />
      </div>
    </TrafficLightProvider>
  );
}

export default App;

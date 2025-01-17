import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import './index.css';
import ElectionProcess from './ElectionProcess';
import { statesData } from './data'; // Ensure this is properly imported and contains valid GeoJSON data



function App() {
  const center = [37.8, -96]; // Center of the US
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [isTopRightInfoOpen, setIsTopRightInfoOpen] = useState(false);

  // Default scores for states (initialize with statesData)
  const [stateScores, setStateScores] = useState(() => {
    const scores = {};
    statesData.features.forEach((state) => {
      scores[state.properties.name] = state.properties.score || 0;
    });
    return scores;
  });

  // Update score for a state
  const updateScore = (stateName, change) => {
    setStateScores((prevScores) => ({
      ...prevScores,
      [stateName]: prevScores[stateName] + change,
    }));
  };

  const HoverInfo = () => (
    <div className="hover-info">
      {hoveredState ? (
        <p>
          <strong>{hoveredState.name}</strong>: {hoveredState.score}
        </p>
      ) : (
        <p>Hover over a state to see its score.</p>
      )}
    </div>
  );

  // Utility function to determine the color based on the score
  const getColor = (score) => {
    return score > 20
      ? '#006400' // Dark green
      : score > 10
        ? '#228B22' // Forest green
        : score > 0
          ? '#7FFF00' // Chartreuse green
          : '#FF6347'; // Tomato red
  };

  const InfoPanel = () => (
    <>
      <div className="info-panel">
        <div>
          {selectedState ? (
            <>
              <h2>{selectedState}</h2>
              <p>Score: {stateScores[selectedState]}</p>
              <button onClick={() => updateScore(selectedState, 1)}>Vote Up</button>
              <button onClick={() => updateScore(selectedState, -1)}>Vote Down</button>

              <HoverInfo />
            </>
          ) : (
            <p>Click on a state to see details.</p>
          )}
        </div>


        {/* Toggle Button for TopRightInfo */}
        <button
          className="toggle-button"
          onClick={() => setIsTopRightInfoOpen((prev) => !prev)}
        >
          {isTopRightInfoOpen ? 'Hide Scores' : 'Show Scores'}
        </button>
      </div>
    </>
  );

  const TopRightInfo = () => (
    <div className="top-right-info">
      <h3>State Scores</h3>
      <ul>
        {Object.entries(stateScores).map(([state, score]) => (
          <li key={state}>
            <strong>{state}:</strong> {score}
          </li>
        ))}
      </ul>
    </div>
  );

  // US boundary coordinates for the map
  // const usBounds = [
  //   [24.396308, -125.0], // Southwest corner (Hawaii is excluded here)
  //   [49.384358, -66.93457], // Northeast corner
  // ];


  return (
    <>
      <div className="app">
     
        <MapContainer
          center={center}
          zoom={4}
          style={{ height: '100vh', width: '60%' }}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}"
            attribution='Tiles &copy; Esri &mdash; National Geographic, USGS, Esri, DeLorme, NAVTEQ'
          />

          {statesData.features.map((state, index) => {
            const coordinates = state.geometry.coordinates[0].map((point) => [
              point[1],
              point[0],
            ]);

            const isSelected = selectedState === state.properties.name;

            return (
              <Polygon
                key={index}
                pathOptions={{
                  fillColor: getColor(stateScores[state.properties.name]),
                  fillOpacity: 0.7,
                  color: isSelected ? 'black' : 'white',
                  weight: isSelected ? 3 : 2,
                }}
                positions={coordinates}
                eventHandlers={{
                  click: () =>
                    setSelectedState((prevSelected) =>
                      prevSelected === state.properties.name
                        ? null
                        : state.properties.name
                    ),
                  mouseover: () => {
                    if (!isSelected) {
                      setHoveredState({
                        name: state.properties.name,
                        score: stateScores[state.properties.name],
                      });
                    }
                  },
                  mouseout: () => {
                    if (!isSelected) {
                      setHoveredState(null);
                    }
                  },
                }}
              />
            );
          })}
        </MapContainer>



        {/* Conditionally Render TopRightInfo */}
        {isTopRightInfoOpen && <TopRightInfo />}

        <InfoPanel />

        <br />
        <br />
      </div>
      <ElectionProcess />
    </>
  );
}

export default App;

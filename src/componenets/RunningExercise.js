import React, { useState, useRef } from "react";

function RunningExercise() {
  const [laps, setLaps] = useState([]);
  const startTimeRef = useRef(null);

  const startRun = () => {
    startTimeRef.current = Date.now();
  };

  const recordLap = () => {
    if (startTimeRef.current) {
      const lapTime = ((Date.now() - startTimeRef.current) / 1000).toFixed(2);
      setLaps([...laps, lapTime]);
    }
  };

  return (
    <div>
      <h2>Running Exercise</h2>
      <button onClick={startRun}>Start Run</button>
      <button onClick={recordLap}>Record Lap</button>

      <h3>Laps</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap} seconds</li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;

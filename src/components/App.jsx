import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);

  let time = new Date().toLocaleTimeString();

  let [time1, setTime] = useState(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time1}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;

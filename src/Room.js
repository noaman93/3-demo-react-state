import React, { useState } from "react";

import "./styles/Room.css";

function Room() {
  let [isLit, setLit] = useState(false);
  let [temperature, setTemperature] = useState(0);

  let roomBackground = isLit ? "light" : "dark";

  function switchOn() {
    setLit(true);
  }

  const toggleLight = () => {
    setLit(!isLit);
  };
  return (
    <div className={`room ${roomBackground}`}>
      <p>The Room is : {isLit ? "Lit" : "Dark"}</p>

      <button onClick={switchOn}>ON</button>
      <button onClick={() => setLit(false)}>OFF</button>
      <button onClick={() => toggleLight()}>Toggle Light</button>

      <p>Temperature : {temperature}</p>
      <button onClick={() => setTemperature(++temperature)}>
        Increase Temperature
      </button>
      <button onClick={() => setTemperature(--temperature)}>
        Decrease Temperature
      </button>
    </div>
  );
}

export default Room;

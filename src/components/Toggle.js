import { useState } from "react";
import React from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white"

  return <button onClick={handleClick}style={{backgroundColor: color}}>
    {isOn ? "ON" : "OFF"}
  </button>;
}

export default Toggle;

import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Click me, please");

  const handleClick = () => {
    setButtonText("Thanks, been clicked!")
  }

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
}
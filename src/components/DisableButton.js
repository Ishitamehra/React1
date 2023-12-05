import React, { useState } from "react";

const DisableButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <h3>I am displaying ENABLE/DISABLE Button.</h3>
      <button onClick={toggleDisable}>
        {isDisabled ? "Enable" : "Disable"} Button
      </button>
      <button disabled={isDisabled}>Click Me</button>
    </div>
  );
};

export default DisableButton;

import React, { useState } from "react";

const ShowHideElement = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h3>I am displaying SHOW OR HIDE ELEMENT.</h3>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Element" : "Show Element"}
      </button>
      {isVisible && <p>This element can be shown or hidden.</p>}
    </div>
  );
};

export default ShowHideElement;

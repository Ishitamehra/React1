import React, { useState } from "react";

const TwoWayBinding = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>I am displaying TWO WAY DATA BINDING.</h3>
      <input type="text" value={text} onChange={handleChange} />
      <p>Text entered: {text}</p>
    </div>
  );
};

export default TwoWayBinding;

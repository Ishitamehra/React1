// ChildComponent.js
import React, { useState } from "react";

const ChildComponent = () => {
  const [children, setChildren] = useState([]);

  const addChildComponent = () => {
    setChildren([...children, <ChildComponent key={children.length} />]);
  };

  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      <p>This is a ChildComponent</p>
      <button onClick={addChildComponent}>Add Child Component</button>
      <div>
        {children.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default ChildComponent;

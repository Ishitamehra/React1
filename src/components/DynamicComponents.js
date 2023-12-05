import React, { useState } from "react";

const DynamicComponents = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    setComponents([...components, <ChildComponent key={components.length} />]);
  };

  const ChildComponent = () => {
    return <p>New Child Component</p>;
  };

  return (
    <div>
      <h3>I am displaying Dynamically add CHILD COMPONENTS.</h3>
      <button onClick={addComponent}>Add Component</button>
      {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
  );
};

export default DynamicComponents;

// ParentComponent.js
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div style={{ border: "2px solid blue", padding: "20px", margin: "20px" }}>
      <h2>Parent Component</h2>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;

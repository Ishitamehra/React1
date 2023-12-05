import React from "react";
import SimpleJSX from "./components/SimpleJSX";
import RecordList from "./components/RecordList";
import ShowHideElement from "./components/ShowHideElement";
import DisableButton from "./components/DisableButton";
import TwoWayBinding from "./components/TwoWayBinding";
import DynamicComponents from "./components/DynamicComponents";
import SumOfNumbers from "./components/SumOfNumbers";

const App = () => {
  return (
    <div>
      <SimpleJSX />
      <hr />
      <RecordList />
      <hr />
      <ShowHideElement />
      <hr />
      <DisableButton />
      <hr />
      <TwoWayBinding />
      <hr />
      <DynamicComponents />
      <hr />
      <SumOfNumbers />
    </div>
  );
};

export default App;

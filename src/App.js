import React from "react";
import SimpleJSX from "./components/SimpleJSX";
import RecordList from "./components/RecordList";
import ShowHideElement from "./components/ShowHideElement";
import DisableButton from "./components/DisableButton";
import TwoWayBinding from "./components/TwoWayBinding";
import DynamicComponents from "./components/ParentComponent";
import SumOfNumbers from "./components/SumOfNumbers";
import Counter from "./components/Counter";
import SearchFilter from "./components/SearchFilter";

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
      <hr />
      <Counter />
      <hr />
      <SearchFilter />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import InputHW from "./controls/InputHW";
import InputCountry from "./controls/InputCountry";
import InputAlert from "./controls/InputAlert";

function App() {
  return <div>
    <InputHW/>
    <InputAlert/>
    <InputCountry maxItems={3}/>
    <InputCountry maxItems={10}/>
  </div>;
}

export default App;

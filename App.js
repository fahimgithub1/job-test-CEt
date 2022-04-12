import './App.css';
import Selactioncomponent from "./components/selactioncomponent"
import AShowingTabllepp from './components/ShowingTablle';
import 'react-bootstrap/Button';
import NameComponnent from './components/NameComponnent';
import { useState } from "react";

function App() {
  const [name, setName] = useState("0");
  // const [updateID, setUpdateID] = useState("");
  
  let handelName = (e) =>{
      setName(e.target.value);
      console.log(e.target.value)
  }

  // const handelUpdate = async (id) =>{
  //   setUpdateID(id);
  //   console.log(updateID);
  // }

  return (
    <div className="App">
      <NameComponnent handelName={handelName}/>
      <Selactioncomponent name={name}/>
      <AShowingTabllepp/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import AddItem from "../ListItem/AddItem";
export default function List() {
  let [number, updateNumber] = useState(100);
  setTimeout(() => {
    console.log("I'm executed");
    updateNumber(300);
  }, 5000);
  return (
    <div className="list">
      <h1>Inside List</h1>
      <ListItem n={number} />
      <AddItem />
    </div>
  );
}

//setup create-react-app
// function component
// state - to hold value in component
// props - passing values to child component from parent

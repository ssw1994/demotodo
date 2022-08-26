import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
export default function List() {
  //let [list, updateList] = useState([]);
  //let [isAddTodo, toggleAddTodo] = useState(false);
  let [counterValue, updateCounter] = useState(0);
  // const addTodo = () => {
  //   const todoItem = {
  //     title: todoTitle,
  //     status: "",
  //   };

  //   updateList([...list, todoItem]);
  // };

  // if (isAddTodo) {
  //   return (
  //     <div>
  //       <input
  //         placeholder="title"
  //         value={todoTitle}
  //         onChange={(e) => updateTodoTitle(e.target.value)}
  //       />
  //       <button onClick={() => addTodo()}>Add</button>
  //       <button onClick={() => toggleAddTodo(false)}>Cancel</button>
  //     </div>
  //   );
  // }

  // const showAddTodo = () => {
  //   toggleAddTodo(true);
  // };

  // if (list.length == 0) {
  //   return (
  //     <div>
  //       <p>No todos added</p>
  //       <button onClick={() => showAddTodo()}>Add Todo</button>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="list">
  //     {list.map((item, index) => {
  //       return <ListItem listItem={item} key={index} />;
  //     })}
  //   </div>
  //);

  const decrement = () => {
    if (counterValue == 0) {
      return;
    }
    updateCounter(counterValue - 1);
  };

  const increment = () => {
    if (counterValue == 10) {
      return;
    }
    updateCounter(counterValue + 1);
  };

  const [testNumber, updateTestNumber] = useState("");

  const checkIsOdd = () => {
    if (testNumber % 2 == 0) {
      alert("Even");
    } else {
      alert("Odd");
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input
        placeholder="test input"
        value={counterValue}
        type="number"
        readOnly
      />
      <button onClick={increment}>+</button>

      <div>
        <input
          value={testNumber}
          type="number"
          onChange={(e) => updateTestNumber(e.target.value)}
        ></input>
        <button onClick={checkIsOdd}>Check</button>
      </div>
    </div>
  );
}

//setup create-react-app
// function component
// state - to hold value in component
// props - passing values to child component from parent

import React from "react";

export default function ListItem(props) {
  return (
    <div className="list-item">
      <h1>Inside ListItem {props.n}</h1>
    </div>
  );
}

import React from "react";

export default function ListItem(props) {
  return (
    <div className="list-item">
      <h1>{props.listItem.title}</h1>
    </div>
  );
}

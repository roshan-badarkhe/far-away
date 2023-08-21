import React from "react";

export default function Item({ list, handleDeleteItem, handleToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={list.packed}
        onChange={() => handleToggle(list.id)}
      />
      <span style={list.packed ? { textDecorationLine: "line-through" } : {}}>
        {list.quantity} {list.description}
      </span>
      <button onClick={() => handleDeleteItem(list.id)}>❌</button>
    </li>
  );
}

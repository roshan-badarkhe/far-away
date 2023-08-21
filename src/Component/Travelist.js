import React, { useState } from "react";
import Item from "./Item";

export default function Travelist({
  setItems,
  items,
  handleDeleteItem,
  handleToggle,
}) {
  const [sortBy, setSortBy] = useState("input");

  let dummy;
  if (sortBy === "input") dummy = items;

  if (sortBy === "description")
    dummy = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    dummy = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  if (sortBy === "quantity")
    dummy = items
      .slice()
      .sort((a, b) => Number(a.quantity) - Number(b.quantity));
  return (
    <div className="list">
      <ul>
        {dummy.map((list) => (
          <Item
            handleToggle={handleToggle}
            handleDeleteItem={handleDeleteItem}
            list={list}
            key={list.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          type="dropdown"
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
          <option value="quantity">Sort by no. of Items</option>
        </select>
        <button onClick={() => setItems([])}>Clear list</button>
      </div>
    </div>
  );
}

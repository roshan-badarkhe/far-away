import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Travelist />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️Far Away 🎒</h1>;
}

function handleSubmit(event) {
  event.preventDefault();
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuanity] = useState(1);
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What will you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuanity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}
function Travelist() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((list) => (
          <Item list={list} key={list.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ list }) {
  return (
    <li>
      <span style={list.packed ? { textDecorationLine: "line-through" } : {}}>
        {list.quantity} {list.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You Have X Items on your list, and you have already packed X(X%)</em>
    </footer>
  );
}

export default App;

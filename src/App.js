import React, { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
  // const [items, setItem] = useState([]);
  const [items, setItems] = useState([]);
  function addItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddIten={addItems} />
      <Travelist handleDeleteItem={handleDeleteItem} items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️Far Away 🎒</h1>;
}

function Form({ onAddIten }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuanity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddIten(newItem);
    setDescription("");
    setQuanity(1);
  }

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
function Travelist({ items, handleDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((list) => (
          <Item handleDeleteItem={handleDeleteItem} list={list} key={list.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ list, handleDeleteItem }) {
  return (
    <li>
      <span style={list.packed ? { textDecorationLine: "line-through" } : {}}>
        {list.quantity} {list.description}
      </span>
      <button onClick={() => handleDeleteItem(list.id)}>❌</button>
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

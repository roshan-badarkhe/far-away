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

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddIten={addItems} />
      <Travelist
        handleToggle={handleToggle}
        handleDeleteItem={handleDeleteItem}
        items={items}
      />
      <Stats items={items} />
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
function Travelist({ items, handleDeleteItem, handleToggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((list) => (
          <Item
            handleToggle={handleToggle}
            handleDeleteItem={handleDeleteItem}
            list={list}
            key={list.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ list, handleDeleteItem, handleToggle }) {
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

function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start Adding some items to your packing list</em>
      </footer>
    );
  }
  const itemLength = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = parseInt((packed / itemLength) * 100);
  return (
    <footer className="stats">
      {percent === 100 ? (
        <em>You are Ready to go!!!!</em>
      ) : (
        <em>
          You Have {itemLength} Items on your list, and you have already packed{" "}
          {packed} ({percent}%)
        </em>
      )}
    </footer>
  );
}

export default App;

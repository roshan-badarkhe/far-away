import React, { useState } from "react";
import Logo from "./Component/Logo";
import Form from "./Component/Form";
import Travelist from "./Component/Travelist";
import Stats from "./Component/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
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
        setItems={setItems}
      />

      <Stats items={items} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

export default function Form({ onAddIten }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuanity] = useState(1);
  const [error, setError] = useState("");
  function validate(description) {
    if (!description) {
      setError("Enter TaskName");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    validate(description);
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
    setError("");
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
      {error && <span>{error}</span>}
      <button type="submit">Add</button>
    </form>
  );
}

import React from "react";

export default function Stats({ items }) {
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

"use client";
import { useState } from "react";

export function AddToCart() {
  const [count, setCount] = useState(0);
  function addInCart() {
    setCount((state) => state + 1);
  }

  return <button onClick={addInCart}>add cart {count}</button>;
}

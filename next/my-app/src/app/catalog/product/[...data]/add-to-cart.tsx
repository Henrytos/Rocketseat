"use client";
import { ReactNode, useState } from "react";
import { Test } from "./Test";

export function AddToCart({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  function addInCart() {
    setCount((state) => state + 1);
  }

  return (
    <>
      <button onClick={addInCart}>add cart {count}</button>
      {children}
    </>
  );
}

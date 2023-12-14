"use client";
import { useEffect, useState } from "react";

export default function () {
  const [count, setCount] = useState(() => {
    const data = localStorage.getItem("@count-1.0");
    if (data) {
      return +JSON.parse(data);
    }
    return 0;
  });
  useEffect(() => {
    localStorage.setItem("@count-1.0", JSON.stringify(count));
  }, [count]);
  return (
    <main>
      <h1>Test</h1>

      <button onClick={() => setCount((state) => state + 1)}>add count</button>
      <p>{count}</p>
    </main>
  );
}

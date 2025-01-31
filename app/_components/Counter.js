"use client";

import { useState } from "react";

function Counter({ data }) {
  const [count, setCount] = useState(0);

  console.log(data);
  return (
    <div>
      <p>There are {data.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
    </div>
  );
}

export default Counter;

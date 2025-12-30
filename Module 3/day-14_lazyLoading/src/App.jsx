import React, { useState, Suspense, lazy } from "react";
// Lazy load the heavy component
const HeavyComponent = lazy(() => import("./HeavyComponent"));
function App() {
  const [count, setCount] = useState(0);
  console.log("Parent rendered");
  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo & Lazy Loading Demo</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>
      <Suspense fallback={<h3>Loading Heavy Component...</h3>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
export default App;

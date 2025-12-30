import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";
const productsData = [
  {id:1, name:"laptop", price:60000},
  {id:2, name:"Mobile", price:25000},
  {id:3, name:"Smart Watch", price:5000}
]
function App() {
  const [count, setCount] = useState(0);
  const [products] = useState(productsData);
  // useMemo: total price recalculates ONLY when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);
  // useCallback: function reference remains stable
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);
  return (
    <div>
      <h1>React Performance Optimization</h1>
      <h2>Total Price: ₹{totalPrice}</h2>
      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>
      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
export default App;

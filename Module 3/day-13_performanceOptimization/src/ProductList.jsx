import React from "react";
function ProductList({ products, onSelectProduct }) {
  console.log("ProductList rendered");
  return (
    <ul style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <h2>Products List</h2>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => onSelectProduct(product)} style={{marginLeft:"3px"}}>
             Select
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ProductList;

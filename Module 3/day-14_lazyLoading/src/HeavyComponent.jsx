import React from "react";
const HeavyComponent = () => {
    console.log("HeavyComponent rendered");
    // Simulate heavy UI / expensive rendering
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
        total += i;
    }
    return (
        <div style={{ padding: "20px", border: "2px solid black", marginTop: "20px" }}>
            <h2>Heavy Component</h2>
            <p>Expensive calculation result: {total}</p>
        </div>
    );
};
export default React.memo(HeavyComponent);

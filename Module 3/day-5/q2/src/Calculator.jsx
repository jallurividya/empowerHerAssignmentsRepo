import React from 'react'
import { useState } from 'react'

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('Add');
  const [results, setResults] = useState([]);
  const action = () => {
    if (num1 === '' || num2 === '') {
      alert('Please enter both numbers');
      return;
    }
    const a = num1;
    const b = num2;
    let result;
    switch (operation) {
      case 'Add':
        result = a + b;
        break;
      case 'Sub':
        result = a - b;
        break;
      case 'Mul':
        result = a * b;
        break;
      default:
        return;
    }
    setResults(prev => [...prev, result]);
  }
  return (
    <div>
      <input type="number" placeholder='enter a number' value={num1} onChange={e => setNum1(e.target.value)} /><br />
      <input type="number" placeholder='enter a number' value={num2} onChange={e => setNum2(e.target.value)}/><br />
      <select value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Sub">Subtract</option>
        <option value="Mul">Multiply</option>
      </select><br />
      <button onClick={action}>Perform Action</button>
      <h3>Results:</h3>
      <ul>
        {results.map((res, idx) => <li key={idx}>{res}</li>)}
      </ul>

    </div>
  )
}

export default Calculator
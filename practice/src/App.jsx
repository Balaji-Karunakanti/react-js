import { useState } from 'react';
import './App.css';

const Toggle = () => {
  const [arr, setArray] = useState(["blue", "black", "red"]);

  const removeItem = (indexToRemove) => {
    const newArr = arr.filter((_, i) => i !== arr.length-1);
    setArray(newArr);
  };


  return (
    <>
      <ul>
        {arr.map((element, index) => (
          <li key={index}>
            <input type="checkbox" />
            {element}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default function App() {
  return <Toggle />;
}

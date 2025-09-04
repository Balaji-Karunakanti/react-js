import { useState } from 'react';
import './App.css';

const Toggle = () => {
  const [expenses, setExpenses] = useState([]);
  const [text, setText] = useState("");
  const [expense, setExpense] = useState("");

  const onTextchange = (e) => {
    setText(e.target.value);
  };

  const onExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const addExpense = () => {
    if (text.trim() !== "" && expense.trim() !== "") {
      setExpenses([...expenses, { name: text, amount: parseFloat(expense) }]);
      setText("");
      setExpense("");
    }
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container">
      <h1 className="title">Expense Tracker</h1>
      <div className="input-group">
        <input
          onChange={onTextchange}
          type="search"
          value={text}
          placeholder="Expense name"
          className="input"
        />
        <input
          onChange={onExpenseChange}
          type="number"
          value={expense}
          placeholder="Amount"
          className="input"
        />
        <button onClick={addExpense} className="add-btn">Add</button>
      </div>

      <ul className="expense-list">
        {expenses.map((item, index) => (
          <li key={index} className="expense-item">
            <span>{item.name}</span>
            <span className="amount">₹{item.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="total">
        <h2>Total: <span>₹{total.toFixed(2)}</span></h2>
      </div>
    </div>
  );
};

export default function App() {
  return <Toggle />;
}

import { useState,useEffect} from 'react'
import { v4 as uuid } from "uuid";
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [todo, setToDO] = useState([]);


  const enterText = (e) => {
    setText(e.target.value);
  }

  const onAddToDo = () => {
    if (text.trim() === "") return;
    setToDO([...todo, { id: uuid(), text: text, isCheck: false }]);
    setText('');
  }

  const onDelete = (id) => {
    const arr = todo.filter((task) => task.id !== id);
    setToDO(arr);
  }

  const onFlagChange = (id) => {
    const updatedList = todo.map((item) =>
      item.id === id ? { ...item, isCheck: !item.isCheck } : item
    );
    setToDO(updatedList);
  }

  return (
    <>
      <div>
        <input
          value={text}
          onChange={enterText}
          type="search"
          placeholder="enter your to do"
        />
        <button onClick={onAddToDo}>Add</button>
      </div>

      {todo.length > 0 && todo.map((element) => (
        <div className='container' key={element.id}>
          <input
            type="checkbox"
            checked={element.isCheck}  
            onChange={() => onFlagChange(element.id)}
          />
          <span className={element.isCheck ? "strike" : ""}>
            {element.text}
          </span>
          <button onClick={() => onDelete(element.id)}>delete</button>
        </div>
      ))}
    </>
  )
}

export default App;

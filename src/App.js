import "./App.scss";
import { Header } from "./components/Header/Header";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import uuid from "react-uuid";

function App() {
  const [todoInput, setToDoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setToDoInput(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: todoInput, id: uuid() }]);
    setToDoInput("");
  };

  const onSortEnd = (oldIndex, newIndex) => {
    setTodos((array) => arrayMove(array, oldIndex, newIndex));
  };

  const handleDelete = (event) => {
    const filteredData = todos.filter((todo) => {
      return todo.id !== event.target.id;
    });
    setTodos(filteredData);
  };

  return (
    <div className="App">
      <Header />
      <form className="todo-form">
        <input
          type="text"
          placeholder="Enter Text"
          onChange={handleInputChange}
          value={todoInput}
        />
        <button type="submit" onClick={submitTodoHandler}>
          Add
        </button>
      </form>
      <div className="todo-list">
        <SortableList
          onSortEnd={onSortEnd}
          className="list"
          draggedItemClassName="dragged"
        >
          {todos.map((item) => (
            <SortableItem key={item.id}>
              <div className="sortable-item">
                <TodoItem
                  text={item.text}
                  id={item.id}
                  handleDelete={handleDelete}
                />
              </div>
            </SortableItem>
          ))}
        </SortableList>
      </div>
    </div>
  );
}

export default App;

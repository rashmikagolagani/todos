import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TodoItems from "./Todoitems";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");
  const createUserApi = "http://localhost:3000/todos";

  useEffect(() => {
    fetch(createUserApi)
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  }, []);

  function add() {
    const trimmedText = inputText.trim();
    console.log(trimmedText);

    if (trimmedText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now().toString(),
      text: trimmedText,
      Completed: true,
    };

    fetch(createUserApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data, newTodo);
        setTodoList((previous) => [...previous, newTodo]);
        setInputText("");
      });
  }
  function deleteTodo(id) {
    console.log("rash", id);
    fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to delete");
        return response.json();
      })
      .then(() => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.error("Error deleting todo:", error));
  }
  function updateTodo(updatedTodo) {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  }
  return (
    <div>
      <div>
        <h2>To-Do list</h2>
        <input
          className="inputbox"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="button" onClick={add}>
          add
        </button>
      </div>
      <div className="todo-item">
        {todoList.map((todo) => {
          return (
            <TodoItems
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

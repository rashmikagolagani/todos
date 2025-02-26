import React from "react";
import { useState, useRef } from "react";
import "./App.css";
import TodoItems from "./Todoitems";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  function add() {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((previous) => [...previous, newTodo]);
    inputRef.current.value = "";
  }
  return (
    <div>
      <div>
        <h2>To-Do list</h2>
        <input ref={inputRef} type="text"></input>
        <button onClick={add}>add</button>
      </div>
      <div>
        {todoList.map((item, index) => {
          return <TodoItems key={index} text={item.text} />;
        })}
      </div>
    </div>
  );
}

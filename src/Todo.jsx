import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TodoItems from "./Todoitems";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");

  function add() {
    const trimmedText = inputText.trim();
    console.log(trimmedText);

    if (trimmedText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: trimmedText,
      isComplete: false,
    };
    setTodoList((previous) => [...previous, newTodo]);
    setInputText("");
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
      <div>
        {todoList.map((item, index) => {
          return <TodoItems key={index} text={item.text} />;
        })}
      </div>
    </div>
  );
}

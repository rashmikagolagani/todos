import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TodoItems from "./Todoitems";
//import DeleteConfirmation from "./DeleteTodo";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");
  // const [deleteId, setDeleteId] = useState(null);
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
      id: Date.now(),
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
    // function confirmDelete(id) {
    //   setDeleteId(id);
    // }

    // function handleDelete() {
    //   if (!deleteId) return;

    //   fetch(`${createUserApi}/${deleteId}`, {
    //     method: "DELETE",
    //   })
    //     .then((response) => {
    //       if (!response.ok) throw new Error("Failed to delete");
    //       return response.json();
    //     })
    //     .then(() => {
    //       setTodoList((prev) => prev.filter((todo) => todo.id !== deleteId));
    //       setDeleteId(null);
    //     })
    //     .catch((error) => console.error("Error deleting todo:", error));
    // }

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
            return (
              <TodoItems
                key={index}
                text={item.text}
                // onDelete={confirmDelete}
              />
            );
          })}
        </div>
        {/* <DeleteConfirmation
          isOpen={deleteId !== null}
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        /> */}
      </div>
    );
  }
}

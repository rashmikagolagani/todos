import React from "react";
import { useState } from "react";
import "./App.css";

export default function Todo() {
  // const [tasks, setTasks] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }
  return (
    <div>
      <h2>To-Do list</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        type="text"
        // value={tasks}
        // onChange={(e) => setTasks(e.target.value)}
        // required
      ></input>
      <button type="submit">add</button>
      {/* </form> */}
    </div>
  );
}

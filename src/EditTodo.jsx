import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Pencil } from "lucide-react";

export function ClickEdit({ onClickEdit }) {
  return (
    <button onClick={() => onClickEdit()}>
      <Pencil className="edit" />
    </button>
  );
}

export default function EditTodo({ isOpen, onClose, todo, onUpdate }) {
  const [newText, setNewText] = useState(todo.text || "");

  useEffect(() => {
    if (isOpen) {
      setNewText(todo.text);
    }
  }, [isOpen, todo.text]);

  if (!isOpen) return null;

  function handleUpdate() {
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, text: newText }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        onUpdate(updatedTodo);
        onClose();
      })
      .catch((error) => console.error("Error updating todo:", error));
  }

  return (
    <div className="popupEdit">
      <div className="popup-content">
        <h3>Edit Task</h3>
        <p>
          <input
            className="editBox"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </p>
        <button onClick={handleUpdate} className="update">
          Update
        </button>
        <button onClick={onClose} className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}

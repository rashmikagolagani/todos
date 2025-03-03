import React from "react";
import "./App.css";
import { Trash2 } from "lucide-react";

export function DeleteTodo({ onDelete }) {
  return (
    <button className="delete-button" onClick={() => onDelete()}>
      <Trash2 />
    </button>
  );
}

export default function DeleteConfirmation({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this todo?</p>
        <button className="yes-button" onClick={onConfirm}>
          Yes
        </button>
        <button className="no-button" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
}

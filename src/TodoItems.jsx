import React, { useState, useEffect } from "react";
import Checkbox from "./Tickbox";
import EditTodo, { ClickEdit } from "./EditTodo";
import DeleteConfirmation, { DeleteTodo } from "./DeleteTodo";

export default function TodoItems({ onDelete, todo, onUpdate }) {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const storageKey = `todo-${todo.id}-checked`;
  const [isStrike, setIsStrike] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) || false;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(isStrike));
  }, [isStrike]);

  const handelCheckboxChange = (checked) => {
    setIsStrike(checked);
  };
  return (
    <div>
      <div className="flex-row">
        <Checkbox todoId={todo.id} onCheck={handelCheckboxChange} />
        <div style={{ textDecoration: isStrike ? "line-through" : "none" }}>
          {todo.text}
        </div>
        <ClickEdit onClickEdit={() => setIsEditing(true)} />
        <EditTodo
          isOpen={isEditing}
          onClose={() => setIsEditing(false)}
          todo={todo}
          onUpdate={onUpdate}
        />
        <DeleteTodo onDelete={() => setShowConfirmationDialog(true)} />
        <DeleteConfirmation
          isOpen={showConfirmationDialog}
          onConfirm={() => {
            onDelete(todo.id);
            setShowConfirmationDialog(false);
          }}
          onCancel={() => setShowConfirmationDialog(false)}
        />
      </div>
    </div>
  );
}

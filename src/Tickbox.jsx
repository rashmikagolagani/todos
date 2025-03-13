import React, { useState, useEffect } from "react";

export default function Checkbox({ onCheck, todoId }) {
  const storageKey = `todo-${todoId}-checked`;

  const [checkbox, setCheckbox] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) || false;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checkbox));
  }, [checkbox]);

  function handleChange(e) {
    const newCheckedState = e.target.checked;
    setCheckbox(newCheckedState);
    onCheck(newCheckedState);
  }

  return (
    <input
      className="checkbox"
      type="checkbox"
      checked={checkbox}
      onChange={handleChange}
    />
  );
}

import React from "react";
import { useState } from "react";
import "./App.css";
import { Pencil } from "lucide-react";

export default function Edit(onEdit) {
  const [handle, setHandle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onEdit();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <button type="submit">
          <Pencil className="edit" />
        </button>
      </form>
    </div>
  );
}

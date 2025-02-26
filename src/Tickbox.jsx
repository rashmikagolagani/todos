import React, { useState } from "react";
export default function Checkbox() {
  const [checkbox, setCheckbox] = useState("");
  return (
    <div>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={(e) => setCheckbox(e.target.checked)}
        required
      />
    </div>
  );
}

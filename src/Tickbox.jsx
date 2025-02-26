import React, { useState } from "react";
export default function Checkbox() {
  const [checkbox, setCheckbox] = useState("");
  return (
    <input
      type="checkbox"
      checked={checkbox}
      onChange={(e) => setCheckbox(e.target.checked)}
      required
    />
  );
}

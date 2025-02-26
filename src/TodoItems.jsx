import React from "react";
import Checkbox from "./Tickbox";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";

//import dustbin from "../assets/dustbin.png";

export default function TodoItems({ text }) {
  return (
    <div>
      <p>
        <Checkbox className="checkbox" /> {text} <Pencil className="edit" />{" "}
        <Trash2 />
      </p>
    </div>
  );
}

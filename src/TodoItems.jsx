import React from "react";
import Checkbox from "./Tickbox";
import { Trash2 } from "lucide-react";
//import dustbin from "../assets/dustbin.png";

export default function TodoItems({ text }) {
  return (
    <div>
      <div>
        <Checkbox />
        <p>{text}</p>
        <div>
          <Trash2 />
        </div>
      </div>
    </div>
  );
}

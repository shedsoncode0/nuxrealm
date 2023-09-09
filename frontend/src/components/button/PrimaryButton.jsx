import React from "react";
import "./buttons.css"

export default function PrimaryButton({text, disabled, onClick, props}) {
  return (
    <div>
      <button
        className={`bg-white px-7 p-2 homepageBoldButtons border border-black text-black`}
        disabled={disabled}
        onClick={onClick}
      >
        <p className="font-medium">{text}</p>
      </button>
    </div>
  );
}

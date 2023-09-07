import React from "react";

export default function PrimaryButton({text, disabled, onClick, props}) {
  return (
    <div>
      <button
        className={`bg-white px-7 p-2 rounded text-black`}
        disabled={disabled}
        onClick={onClick}
      >
        <p className="font-medium">{text}</p>
      </button>
    </div>
  );
}

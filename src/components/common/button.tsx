import React from "react";

export default function Button(props: any) {
  return (
    <button
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

import React from "react";

export default function PrimaryButton(props) {
  return (
    <button disabled={props.disabled} className="btn btn-secondary">
      {props.label}
    </button>
  );
}

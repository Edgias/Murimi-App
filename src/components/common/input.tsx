import React from "react";

export default function Input(props: any) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        className={`form-control ${props.error && "is-invalid"}`}
      />
      {props.error && (
        <span className="error invalid-feedback">{props.error}</span>
      )}
    </div>
  );
}

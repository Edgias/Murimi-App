import React from "react";

export default function Col(props) {
  return <div className={props.className}>{props.children}</div>;
}

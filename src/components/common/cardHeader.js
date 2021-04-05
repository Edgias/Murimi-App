import React from "react";

export default function CardHeader(props) {
  return (
    <div className={`card-header ${props.cssClass}`}>{props.children}</div>
  );
}

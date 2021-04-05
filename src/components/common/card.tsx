import React from "react";

export default function Card(props: any) {
  return <div className={`card ${props.cssClass}`}>{props.children}</div>;
}

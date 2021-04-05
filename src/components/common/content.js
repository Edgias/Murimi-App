import React from "react";

export default function Content(props) {
  return (
    <section className="content">
      <div className="container-fluid">{props.children}</div>
    </section>
  );
}

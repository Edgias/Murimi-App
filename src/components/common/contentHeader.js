import React from "react";
import { Link } from "react-router-dom";

export default function ContentHeader(props) {
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h3>{props.title}</h3>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <Link to={props.parentLink}>{props.parentTitle}</Link>
              </li>
              <li className="breadcrumb-item active">{props.title}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

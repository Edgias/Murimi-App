import React from "react";
import ContentHeader from "./common/contentHeader";

export default function Forbidden(props) {
  return (
    <>
      <ContentHeader title="Forbidden" parentTitle="Home" parentLink="/" />
      <section className="content">
        <div className="error-page">
          <h2 className="headline text-danger"> {props.errorCode}</h2>

          <div className="error-content">
            <h3>
              <i className="fas fa-lock text-danger"></i> Oops! You are not
              allowed to access this resource!
            </h3>

            <p>
              Kindly contact your administrator if you are supposed to access
              this resource.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

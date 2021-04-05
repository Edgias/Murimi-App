import React from "react";
import { Link } from "react-router-dom";
import ContentHeader from "./common/contentHeader";

export default function Error(props) {
  return (
    <>
      <ContentHeader title="Error" parentTitle="Home" parentLink="/" />
      <section className="content">
        <div className="error-page">
          <h2 className="headline text-danger"> {props.errorCode}</h2>

          <div className="error-content">
            <h3>
              <i className="fas fa-exclamation-triangle text-danger"></i> Oops!
              Something went wrong.
            </h3>

            <p>
              We will work on fixing that right away. Meanwhile, you may{" "}
              <Link to="/">return to dashboard</Link> or try using the search
              form.
            </p>
            <form className="search-form">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Search"
                />

                <div className="input-group-append">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-warning"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

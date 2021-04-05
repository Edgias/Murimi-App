import React from "react";
import { Link } from "react-router-dom";
import Content from "./content";
import ContentHeader from "./contentHeader";

export default function NoRecords(props) {
  return (
    <>
      <ContentHeader parentLink="#" />
      <Content>
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1 className="display-4">No Data</h1>
              <p className="lead">
                There is no data to display. Kindly use button below to create
                one.
              </p>
              <hr className="my-4" />
              <Link
                className="btn btn-md btn-secondary"
                to={`/${props.path}/new`}
              >
                Create New
              </Link>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

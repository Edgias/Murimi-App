import React from "react";
import Content from "./content";
import ContentHeader from "./contentHeader";

export default function LoadingSpinner() {
  return (
    <>
      <ContentHeader parentLink="#" />
      <Content>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-info"></i>
                </h3>
              </div>
              <div className="card-body">
                <div className="callout callout-info">
                  <p>
                    <i className="fas fa-spinner mr-1"></i> Please wait...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Table from "../common/table";

export default function ContractTermsTable(props) {
  const columns = [
    {
      path: "name",
      label: "Name",
      content: (contractTerm) => (
        <Link to={`/contract-terms/${contractTerm.id}`}>
          {contractTerm.name}
        </Link>
      ),
    },
    {
      key: "delete",
      content: (contractTerm) => (
        <button
          onClick={() => props.onDelete(contractTerm)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      data={props.contractTerms}
      columns={columns}
      sortColumn={props.sortColumn}
      onSort={props.onSort}
    />
  );
}

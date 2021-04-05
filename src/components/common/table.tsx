import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

export default function Table(props: any) {
  const { data, columns, sortColumn, onSort } = props;

  return (
    <table className="table table-hover text-nowrap">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}

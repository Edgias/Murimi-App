import React from "react";
import _ from "lodash";

export default function TableBody<T>(props: any) {
  const renderCell = (item: T, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  const createKey = (item: T, column) => {
    return item.id + (column.path || column.key);
  };

  return (
    <tbody>
      {props.data.map((item: T) => (
        <tr key={item.id}>
          {props.columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

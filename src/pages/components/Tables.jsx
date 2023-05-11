import React from "react";
import { Table, Container, Badge } from "react-bootstrap";
import data from "../../utils/data.json";


const Tables = () => {
  const column = Object.keys(data[0]);

  const ThData = () => {
    return column.map((d) => {
      return <th key={d}>{d}</th>;
    });
  };

  const tdData = () => {
    return data.map((d) => {
      return (
        <tr>
          {column.map((v) => {
            return <td>{d[v]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <div>
      <Container>
        <Table id="" className="table-hover">
          <thead>
            <tr>{ThData()}</tr>
          </thead>
          <tbody>{tdData()}</tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Tables;

import React from "react";
import "./Table.css";
import { FaPencilAlt } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io5";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const products = [
  { id: 0, category: "PC", name: "Lenovo Y-50", quantity: 5, price: 25000.0 },
  { id: 1, category: "PC", name: "Lenovo Y-50", quantity: 5, price: 25000.0 },
  { id: 2, category: "PC", name: "Lenovo Y-50", quantity: 5, price: 25000.0 },
  { id: 3, category: "PC", name: "Lenovo Y-50", quantity: 5, price: 25000.0 },
];

function Table() {
  return (
    <table>
      <thead>
        <tr className="table__green-row">
          <td className="table__head">
            ID <CgArrowsExchangeAltV />
          </td>
          <td className="table__head">
            Category
            <CgArrowsExchangeAltV />
          </td>
          <td className="table__head">
            Name
            <CgArrowsExchangeAltV />
          </td>
          <td className="table__head">
            Quantity
            <CgArrowsExchangeAltV />
          </td>
          <td className="table__head">
            Price <CgArrowsExchangeAltV />
          </td>
          <td className="table__head"></td>
        </tr>
      </thead>
      <tbody>
        {products.map((element, index) => {
          return (
            <tr
              key={element.id}
              className={index % 2 !== 0 ? "table__green-row" : ""}
            >
              <td>{element.id}</td>
              <td>{element.category}</td>
              <td>{element.name}</td>
              <td>{element.quantity}</td>
              <td>{element.price}</td>
              <td className="table__icons">
                <FaPencilAlt />
                <IoLogoBitbucket />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;

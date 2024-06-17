import React, { useState, useEffect } from "react";
import "./Table.css";
import { FaPencilAlt } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io5";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";

function Table({ products }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return (
      <div className="spinner-container">
        <FaSpinner className="table-spinner" />
      </div>
    );
  }
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
              <td>{element.price}₴</td>
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

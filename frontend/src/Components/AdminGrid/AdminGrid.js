import React from "react";
import { employees } from "./data";
import "./AdminGrid.css";

export default function Grid() {
  function checkUncheck() {
    const selectAllCheckBox = document.getElementById("mainCheck");
    const allCheckBox = document.getElementsByClassName("lang");
    for (let i = 0; i < allCheckBox.length; i++) {
      allCheckBox[i].checked = selectAllCheckBox.checked;
    }
  }
  // let employeesToBeDeletedSet;
  // function selectEmployeesToDelete() {
  //   const employeesToBeDeleted = document.getElementsByTagName(
  //     'input[className="lang"]:checked'
  //   );
  //   employeesToBeDeletedSet = new Set(employeesToBeDeleted);
  // }

  return (
    // <h1>hello</h1>
    <div>
      <div className="adminGrid">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" id="mainCheck" onClick={checkUncheck} />
              </th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input className="lang" type="checkbox" value={e.id} />
                  </td>
                  <td>{e.id}</td>
                  <td>{e.fname}</td>
                  <td>{e.lname}</td>
                  <td>{e.email}</td>
                  <td>+91{e.phno}</td>
                  <td>{e.desig}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

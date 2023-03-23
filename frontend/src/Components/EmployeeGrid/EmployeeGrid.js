import React, { useEffect, useState } from "react";

const EmployeeGrid = () => {
  function checkUncheck() {
    const selectAllCheckBox = document.getElementById("mainCheck");
    const allCheckBox = document.getElementsByClassName("lang");
    for (let i = 0; i < allCheckBox.length; i++) {
      allCheckBox[i].checked = selectAllCheckBox.checked;
    }
  }

  const employeesURL = "https://localhost:7243/api/Employee";
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(employeesURL)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div className="adminGrid">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" id="mainCheck" onClick={checkUncheck} />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>DateOfJoining</th>
              <th>PhotoFileName</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input className="lang" type="checkbox" value={e.id} />
                  </td>
                  <td>{e.employeeId}</td>
                  <td>{e.employeeName}</td>
                  <td>{e.department}</td>
                  <td>{e.dateOfJoining}</td>
                  <td>{e.photoFileName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeGrid;

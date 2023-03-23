import React, { useEffect, useState } from "react";
import AdminGrid from "../Components/AdminGrid/AdminGrid";
import EmployeeGrid from "../Components/EmployeeGrid/EmployeeGrid";
import Header from "../Components/Header/Header";
import "./AdminHomePage.css";
import axios from "axios";
import { v1 } from "uuid";

const AdminHomePage = () => {
  const [adminGrid, setAdminGrid] = useState(true);
  const [employeeGrid, setEmployeeGrid] = useState(false);

  function handleAdminButton() {
    setAdminGrid(true);
    setEmployeeGrid(false);
  }

  function handleEmployeeButton() {
    setAdminGrid(false);
    setEmployeeGrid(true);
  }
  useEffect(() => {}, [adminGrid, employeeGrid]);

  async function addEmployee() {
    const newEmployee = {
      EmployeeID: v1(),
      EmployeeName: "Batmanrop",
      Department: "CSE",
      DateofJoining: "01-01-0001",
      PhotoFileName: "Check.jpg",
      isActive: true,
    };
    try {
      await axios.post("https://localhost:7243/api/Employee", newEmployee);
    } catch (er) {
      console.log(er);
    }
  }

  async function deleteEmployee() {
    const emp = {
      EmployeeID: "F6D07690-C95A-11ED-B35B-CD1B78AF9A6F",
    };
    try {
      await axios.post("https://localhost:7243/api/Employee/delete", emp);
    } catch (er) {
      console.log(er);
    }
  }

  async function updateEmployee() {
    const id = "F6D07690-C95A-11ED-B35B-CD1B78AF9A6F";
    const updatedEmployee = {
      EmployeeID: id,
      EmployeeName: "Batmanrop",
      Department: "AUDIT",
      DateofJoining: "23-03-2021",
      PhotoFileName: "jonDoe.jpg",
      isActive: true,
    };
    try {
      await axios.patch("https://localhost:7243/api/Employee", updatedEmployee);
    } catch (er) {
      console.log(er);
    }
  }

  return (
    <div>
      <Header />
      <div>
        <button onClick={handleAdminButton}>AdminGrid</button>
        <button onClick={handleEmployeeButton}>EmployeeGrid</button>
      </div>
      <div className="buttons">
        <button className="button" onClick={addEmployee}>
          <i className="fa-solid fa-plus"></i>ADD
        </button>

        <button className="button" onClick={deleteEmployee}>
          <i className="fa-solid fa-trash"></i>DELETE
        </button>
        <button className="button" onClick={updateEmployee}>
          <i className="fa-regular fa-pen-to-square"></i>UPDATE
        </button>
        <button className="button">
          <i className="fa-sharp fa-solid fa-right-from-bracket "></i> EXPORT
        </button>
      </div>

      {adminGrid && <AdminGrid />}
      {employeeGrid && <EmployeeGrid />}
    </div>
  );
};

export default AdminHomePage;

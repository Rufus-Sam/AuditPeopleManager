import React, { useEffect, useState } from "react";
import AdminGrid from "../Components/AdminGrid/AdminGrid";
import EmployeeGrid from "../Components/EmployeeGrid/EmployeeGrid";
import Header from "../Components/Header/Header";
import "./AdminHomePage.css";

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

  return (
    <div>
      <Header />
      <div>
        <button onClick={handleAdminButton}>AdminGrid</button>
        <button onClick={handleEmployeeButton}>EmployeeGrid</button>
      </div>
      <div className="buttons">
        <button className="button">
          <i className="fa-solid fa-plus"></i>ADD
        </button>

        <button className="button">
          <i className="fa-solid fa-trash"></i>DELETE
        </button>
        <button className="button">
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

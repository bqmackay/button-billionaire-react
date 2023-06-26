import React from "react";
import Employee from "./employee"
import EmployeeUpgrade from "./employee_upgrade"

function EmployeeCollection({score, employees, setEmployees}) {
    const getContent = (emps, setEmps) => {
        let content = [];
        for (let i = 0; i < emps.length; i++) {

          content.push(<Employee key={i} hasFunds={score >= emps[i].purchase_cost} employee={emps[i]} setEmployee={setEmps[i]} />);
        }
        return content;
      };
      const getEmployeeUpgrade = (emps, setEmps) => {
        let content = [];
        for (let i = 0; i < emps.length; i++) {
          content.push(<EmployeeUpgrade key={i} hasFunds={score >= emps[i].upgrade_cost} employee={emps[i]} setEmployee={setEmps[i]} />);
        }
        return content;
      };
    return (
      <>
        <div className="upgrade_container">
            {getContent(employees, setEmployees)}
        </div>
        <div className="upgrade_container">
            {getEmployeeUpgrade(employees, setEmployees)}
        </div>
      </>
    );
}

export default EmployeeCollection;

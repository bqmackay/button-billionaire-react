function EmployeeUpgrade({hasFunds, employee, setEmployee}) {
  return (
    <div className="employee">
        <p>
            Upgardes {employee.name} to double its production
        </p>
        <p>
            ${employee.upgrade_cost} 
        </p>
        <button onClick={ evt => {
            if (!hasFunds) return;
            let e = { ...employee }
            e.click_multiplier = e.click_multiplier * 2
            e.upgrade_cost = e.upgrade_cost * 3
            setEmployee(e);
          }}> 
          Upgrade
        </button>
    </div>
  );
}

export default EmployeeUpgrade;

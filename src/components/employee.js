

function Employee({hasFunds, employee, setEmployee, setScore}) {
  return (
    <div className="employee">
    <p>
        {employee.name}: {employee.count}
    </p>
    <p>
        ${employee.purchase_cost}
    </p>
    <p>
        Adds {employee.click_multiplier} click(s) per second
    </p>
      <button onClick={ evt => {
        if (!hasFunds) return;
        let e = { ...employee }
        e.count++
        e.purchase_cost = e.purchase_cost * 1.4
        setEmployee(e);
      }}> 
        Upgrade</button>
    </div>
  );
}

export default Employee;

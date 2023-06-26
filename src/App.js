import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import MainButton from "./components/main_button"
import EmployeeCollection from './components/employee_collection';
import Counter from './components/counter';

function App() {
  const [score, setScore] = useState(0);
  const [employee1, setEmployee1] = useState({ name: "Intern", count: 0, click_multiplier: 1, purchase_cost: 10, upgrade_cost: 5000})
  const [employee2, setEmployee2] = useState({ name: "Senior Employee", count: 0, click_multiplier: 5, purchase_cost: 250, upgrade_cost: 10000})
  const [employee3, setEmployee3] = useState({ name: "Manager", count: 0, click_multiplier: 15, purchase_cost: 1000, upgrade_cost: 25000})
  const [employee4, setEmployee4] = useState({ name: "Director", count: 0, click_multiplier: 30, purchase_cost: 20000, upgrade_cost: 100000})
  const [employee5, setEmployee5] = useState({ name: "CEO", count: 0, click_multiplier: 100, purchase_cost: 1000000, upgrade_cost: 10000000})

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Button Billionaire
        </p>
        <MainButton score={score} setScore={setScore} employees={[employee1, employee2, employee3, employee4, employee5]}/>
        <Counter score={score} setScore={setScore} employees={[employee1, employee2, employee3, employee4, employee5]} />
        <EmployeeCollection score={score} employees={[employee1, employee2, employee3, employee4, employee5]} setEmployees={[setEmployee1, setEmployee2, setEmployee3, setEmployee4, setEmployee5]} />
      </header>
    </div>
  );
}

export default App;

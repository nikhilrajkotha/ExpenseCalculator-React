import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    
    <Card className="expenses">
      <ExpensesFilter
        selectedDefault={filteredYear}
        onChangeFilter={filterChangehandler}
      />
      <ExpensesChart expenses= {filteredExpenses}/>
    <ExpensesList items = {filteredExpenses} />
    
    </Card>
  
  );
}
export default Expense;

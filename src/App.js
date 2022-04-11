import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expense.js";
import NewExpense from "./Components/NewExpenses/NewExpense";
const dummy_expenses = [
  {
    date: new Date(2021, 3, 11),
    description: "car Insurance1",
    amount: "1010",
  },
  {
    date: new Date(2022, 0, 12),
    description: "car Insurance2",
    amount: "1020",
  },
  {
    date: new Date(),
    description: "car Insurance3",
    amount: "1030",
  },
];
function App() {
  const [expenses, setNewExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    setNewExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  return (
    <div id="intro">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
}
export default App;

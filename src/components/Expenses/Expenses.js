import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    console.log(year);
  };
  //we are filtering the dates of the entered title and storing it filteredexpenses
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let ExpenseItems;

  if (filteredExpenses.length > 0) {
    ExpenseItems = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} // here we are adding key
        name={expense.name}
        price={expense.price}
        date={expense.date}
      />
    ));
  } else {
    ExpenseItems = "No Expenses to show 😕";
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterchange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      {ExpenseItems}
    </Card>
  );
};
export default Expenses;

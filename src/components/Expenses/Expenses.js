import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterchange={filterChangeHandler}
      />
      <ExpenseItem
        name={props.data[0].name}
        price={props.data[0].price}
        date={props.data[0].date}
      />
      <ExpenseItem
        name={props.data[1].name}
        price={props.data[1].price}
        date={props.data[1].date}
      />
    </Card>
  );
};
export default Expenses;

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <Card className="expenses">
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

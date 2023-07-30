import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [newname, setNewname] = useState(props.name);

  const clickHandler = () => {
    setNewname("New name is there");
    console.log(newname);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expenese-item__description">
        <h2>{newname}</h2>
      </div>
      <div className="expense-item__price">${props.price}</div>
      <button onClick={clickHandler}>CLick to change the name</button>
    </Card>
  );
}
export default ExpenseItem;

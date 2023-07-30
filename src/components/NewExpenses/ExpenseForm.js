import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // title change state handler
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(enteredTitle);
  };
  // amount change state handler
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
  };
  //date change state handler
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(enteredDate);
  };
  //submit handler that handles the form and also sents the data to NewEpense.js which is its immediate parent componnet
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
      id:Math.random()
    };
    // console.log(formData);
    props.onSaveformData(formData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required={true}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
            required={true}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
            required={true}
          />
        </div>
      </div>
      <div className="new-expenses__actions">
        <button type="submit">Add expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

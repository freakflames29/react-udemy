import "./components/Expenses/Expenses.css";
import "./components/UI/Card.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      name: "Car insurance",
      price: "241",
      date: new Date(2021, 5, 12),
    },
    {
      id: 2,
      name: "Home insurance",
      price: "269",
      date: new Date(2021, 6, 19),
    },
    {
      id: 3,
      name: "Life insurance",
      price: "269",
      date: new Date(2021, 7, 22),
    },
  ];
  const [allData, setAlldata] = useState(data);
  const totalData = (gatheredData) => {
    console.log("from app.js");
    setAlldata((prevState) => {
      return [
        gatheredData,
        ...allData, // here we are gatering new data and merging that data into our base data
      ];
    });

    console.log(allData);
  };
  return (
    <div>
      <NewExpense onGatheredData={totalData} />
      <Expenses data={allData} />
    </div>
  );
}

export default App;

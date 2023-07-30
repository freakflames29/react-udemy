import "./components/Expenses/Expenses.css";
import "./components/UI/Card.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const data = [
    {
      name: "Car insurance",
      price: 241,
      date: new Date(2021, 5, 12),
    },
    {
      name: "Home insurance",
      price: 269,
      date: new Date(2021, 6, 19),
    },
    {
      name: "Life insurance",
      price: 269,
      date: new Date(2021, 7, 22),
    },
  ];
  const totalData = (gatheredData) => {
    console.log("from app.js");
    console.log(gatheredData);
  };
  return (
    <div>
      <NewExpense onGatheredData={totalData} />
      <Expenses data={data} />
    </div>
  );
}

export default App;

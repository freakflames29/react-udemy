import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const formdataCollector = (formdata) => {
    // const gatheredFormdata = { ...formdata };
    // console.log(formdata);
    props.onGatheredData(formdata);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveformData={formdataCollector} />
    </div>
  );
};
export default NewExpense;

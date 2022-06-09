import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItems lists={props.items} />
    </div>
  );
}

export default Expenses;

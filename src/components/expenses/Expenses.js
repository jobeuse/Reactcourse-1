import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../ui/Card";
import ExpensesFilter from "../Expensefilter/ExpensesFilter";
const Expenses = (props) => {
  const filterChangeHandler = (selectedYear) => {
    console.log("expense.js");
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <ExpenseItems lists={props.items[0]} />
        <ExpenseItems lists={props.items[1]} />
        <ExpenseItems lists={props.items[2]} />
        <ExpenseItems lists={props.items[3]} />
      </Card>
    </div>
  );
};

export default Expenses;

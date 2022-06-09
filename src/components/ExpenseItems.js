import "./ExpenseItems.css";
import ExpDate from "./ExpensesDate";

function Expense(props) {
  // const newList = props.lists.map((list) =>(
  // <div className="expense-item">
  //   <div>{list.date.toLocalString('en-US',{month:'long'})}</div>
  //   <div className="expense-item__description">
  //     <h1>{list.title}</h1>
  //     <div className="expense-item__price">$12.00</div>
  //   </div>
  // </div>
  // ));
  console.log(props.lists[0]);
  return (
    <div className="expense-item">
      <ExpDate />
      <div className="expense-item__description">
        <h1> {props.lists[0].title}</h1>
        <div className="expense-item__price"> {props.lists[0].amount}</div>
      </div>
    </div>
  );
}

export default Expense;

import react, { useState } from "react";
import "./ExpenseItems.css";
import ExpDate from "./ExpensesDate";
import Card from "../ui/Card";

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
  //console.log(props.lists);
  const [title, setTitle] = useState(props.lists.title);

  const clicked = () => {
    setTitle("updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpDate />
      {/* <button onClick={clicked}>change title</button> */}
      <div className="expense-item__description">
        <h1> {title}</h1>
        <div className="expense-item__price"> {props.lists.amount}</div>
      </div>
    </Card>
  );
}

export default Expense;

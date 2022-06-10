import React from "react";
import "./NewExepenses.css";
import NewExpenseForm from "./NewExpenseForm";
const NewExpenses = (props) => {
  //getting data from submitted form through props

  const saveExpensedataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //sending data in app.js
    props.onAddExpense(expenseData);

    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveFormData={saveExpensedataHandler} />
    </div>
  );
};

export default NewExpenses;

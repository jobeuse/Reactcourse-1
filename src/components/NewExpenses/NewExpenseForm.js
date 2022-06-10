import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  //state

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userIput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });

  const InputValueTitle = (event) => {
    // single state
    setEnteredTitle(event.target.value);

    //grouping state

    // setUserInput({
    //   ...userIput,
    //   enteredTitle: event.target.value
    // });
  };

  const InputValueAmount = (event) => {
    // single state
    setEnteredAmount(event.target.value);

    //grouping stat
    // setUserInput({
    //   ...userIput,
    //   enteredAmount: event.target.value
    // });
  };

  const InputValueDate = (event) => {
    // single state
    setEnteredDate(event.target.value);

    //grouping stat
    // setUserInput({
    //   ...userIput,
    //   enteredDate: event.target.value
    // });
  };

  const submissionHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    // console.log(expenseData);

    //sending data in newexpenses.js
    props.onSaveFormData(expenseData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  return (
    <form onSubmit={submissionHandler} className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          required
          value={enteredTitle}
          onChange={InputValueTitle}
        />
      </div>

      <div className="new-expense__control">
        <label>Amount</label>
        <input
          value={enteredAmount}
          type="number"
          min="0.01"
          step="0.01"
          onChange={InputValueAmount}
        />
      </div>

      <div className="new-expense__control">
        <label>Date</label>
        <input
          value={enteredDate}
          type="date"
          min="2020-01-01"
          step="0.01"
          onChange={InputValueDate}
        />
      </div>
      <div className="new-expense__actions">
        <button>Add new</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;

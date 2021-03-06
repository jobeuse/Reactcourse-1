import "./styles.css";
import Expenses from "./components/expenses/Expenses";
import NewExepenses from "./components/NewExpenses/NewExepenses";

export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];

  const addExpenseHandler = (expenses) => {
    console.log("in app.js");
    console.log(expenses);
  };
  return (
    <div className="App">
      <h1>Let's Get Started</h1>
      <NewExepenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

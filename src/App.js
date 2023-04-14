import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import "./index.css";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const App = () => {
  const [expenses, setExpenses] = useState(Expenses);
  const addExpenseHadler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let ExpenseItems = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
      location={expense.location}
    />
  ));
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHadler} />
      <ExpensesChart expenses={filteredExpenses} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p>No Expenses Found</p>
        ) : filteredExpenses.length === 1 ? (
          <>
            <ExpenseItem
              key={filteredExpenses[0].id}
              date={filteredExpenses[0].date}
              title={filteredExpenses[0].title}
              amount={filteredExpenses[0].amount}
              location={filteredExpenses[0].location}
            />
            <p>Only single Expense here. Please add more...</p>
          </>
        ) : (
          ExpenseItems
        )}
      </Card>
    </div>
  );
};

export default App;

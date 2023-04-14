import "./NewExpense.css";

import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [toAddExpense, addExpense] = useState(false);

  const addExpenseHandler = () => {
    addExpense(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    addExpense(false);
  };
  const cancelExpenseHandler = () => {
    addExpense(false);
  };

  return (
    <div className="new-expense">
      {!toAddExpense && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {toAddExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;

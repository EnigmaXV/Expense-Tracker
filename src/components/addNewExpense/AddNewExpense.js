import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const AddNewExpense = ({ onAddExpense }) => {
  //IMPORTANT! This is how you pass data from child to parent
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
          className="btn--primary"
        >
          Add Expense
        </button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default AddNewExpense;

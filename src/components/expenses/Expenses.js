import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onYearChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //IMPORTANT! this is how you filter data
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <ExpenseFilter year={filteredYear} onYearChange={onYearChangehandler} />
      {filteredExpenses.length === 0 && (
        <p className="notFound">No expesnes found, Add one 😉 </p>
      )}
      {filteredExpenses.map((expense) => {
        const { id, title, amount, date } = expense;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </div>
  );
};

export default Expenses;

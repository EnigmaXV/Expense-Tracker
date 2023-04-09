import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = ({ title, amount, date, key }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
};

export default ExpenseItem;

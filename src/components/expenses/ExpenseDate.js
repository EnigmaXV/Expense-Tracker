const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="date">
      <div style={{ fontWeight: "bold" }}>{month}</div>
      <div style={{ fontWeight: "bold" }}>{day}</div>
      <div style={{ fontWeight: "bold" }}>{year}</div>
    </div>
  );
};

export default ExpenseDate;

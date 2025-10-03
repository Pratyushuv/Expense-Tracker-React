import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expense }) {
  console.log(expense);
  return (
    <div className="expense-list  overflow-y-auto max-h-85 scrollbar-hide border-8 p-5 border-amber-600 flex flex-col gap-5">
      {expense.map((exp, i) => (
        <ExpenseItem key={i} exp={exp} index={i + 1} />
      ))}
    </div>
  );
}

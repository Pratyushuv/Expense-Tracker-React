export default function ExpenseItem({ exp, index }) {
  //   console.log(exp.key);
  console.log(index);
  return (
    <div className="expense flex gap-20 border-2 border-amber-600 p-2">
      <h1 className="text-2xl font-bold font-mono">{index}.</h1>
      <h1 className="text-2xl font-bold font-mono">{exp.expense}</h1>
      <p className="text-2xl font-bold font-mono">{exp.amount}₹</p>
      <p className="text-2xl font-bold font-mono">{exp.date}</p>
    </div>
  );
}

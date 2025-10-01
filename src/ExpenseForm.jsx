export default function ExpenseForm({
  handleChange,
  handleAddExpense,
  addExpense,
}) {
  return (
    <div className="expense-form flex flex-col gap-7 w-full max-w-xl ">
      <div className="form flex flex-col gap-3">
        <label className="text-white font-semibold font-mono">Expense</label>
        <input
          type="text"
          placeholder="Enter Expense"
          value={addExpense.expense}
          className="border-4 bg-white p-2 rounded-full border-amber-600 placeholder-black font-semibold"
          id="expense"
          onChange={handleChange}
          required
        />
        <label className="text-white font-bold font-mono">Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={addExpense.amount}
          className="border-4 bg-white p-2 rounded-full border-amber-600  placeholder-black font-semibold"
          id="amount"
          onChange={handleChange}
          required
        />
        <label className="text-white font-semibold font-mono ">Date</label>
        <input
          type="date"
          value={addExpense.date}
          className="border-4 bg-white p-2 rounded-full border-amber-600  text-black font-semibold"
          id="date"
          onChange={handleChange}
          required
        />
      </div>
      <button
        onClick={() => handleAddExpense()}
        className="border-2 rounded-full p-2 bg-amber-600 text-2xl text-black font-semibold"
      >
        Add Expense
      </button>
    </div>
  );
}

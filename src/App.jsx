import { useEffect, useState } from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Error from "./Error";

function App() {
  const [expense, setExpense] = useState(
    () => JSON.parse(localStorage.getItem("initial")) || []
  );
  const [addExpense, setAddExpense] = useState({
    expense: "",
    amount: "",
    date: "",
  });
  // const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    // localStorage.setItem("initial", JSON.stringify(data));
    // setExpense([JSON.parse(localStorage.getItem("initial"))]);
    localStorage.setItem("initial", JSON.stringify(expense));
  }, [expense]);

  function handleChange(e) {
    setAddExpense({ ...addExpense, [e.target.id]: e.target.value });
  }

  function handleAddExpense() {
    // console.log(addExpense);
    // const values = Object.values(addExpense);
    // console.log(values);
    // const res = values.includes("");
    // console.log(res);
    // setIsEmpty(res);

    // console.log(isEmpty);
    // if (!isEmpty)
    //sol2
    console.log(addExpense);
    const onEmpty = Object.values(addExpense).filter((val) => val === "");

    if (onEmpty.length > 0) return;
    setExpense([...expense, addExpense]);

    setAddExpense({ expense: "", amount: "", date: "" });
  }
  // console.log(addExpense);
  console.log(expense);

  return (
    <div className=" flex flex-col gap-10 w-full justify-center items-center mt-10">
      <h1 className="text-5xl text-amber-600! font-bold font-mono w-full flex justify-center whitespace-nowrap pl-15">
        EXPENSE TRACKER
      </h1>
      <div className="con md: flex w-full gap-40 justify-center mt-15">
        <ExpenseForm
          handleChange={handleChange}
          handleAddExpense={handleAddExpense}
          addExpense={addExpense}
        />
        {expense.length <= 0 ? <Error /> : <ExpenseList expense={expense} />}
      </div>
    </div>
  );
}

export default App;

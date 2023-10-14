import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseList from "./containers/ExpenseList";
import ExpenseListForm from "./containers/ExpenseListForm";
import ExpenseFilter from "./containers/ExpenseFilter";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "iPhone", amount: 10, category: "Groceries" },
    { id: 2, description: "iMac", amount: 20, category: "Utilities" },
    { id: 3, description: "iWatch", amount: 30, category: "Entertainment" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <h1>Expense List</h1>
      <ExpenseListForm
        onSubmit={(data) => {
          setExpenses([...expenses, { ...data, id: parseInt(uuidv4()) }]);
        }}
      />
      <br></br>
      <ExpenseFilter
        onSelectedCategory={(category) => setSelectedCategory(category)}
      />
      <br></br>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      />
    </>
  );
}

export default App;

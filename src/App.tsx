import "bootstrap/dist/css/bootstrap.css";

import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

import categories from "./components/categories";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(" ");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Movie",
      amount: 300,
      category: "Entertainment",
    },
    {
      id: 2,
      description: "Milk",
      amount: 50,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Current",
      amount: 100,
      category: "Utility",
    },
    {
      id: 4,
      description: "Computer",
      amount: 1000,
      category: "Utility",
    },
  ]);

  const visibleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-6">
        <h1>Expense Tracker</h1>
      </div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newexpense) =>
            setExpenses([
              ...expenses,
              { ...newexpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}
export default App;

import React, { useState } from "react";
import NewExpense from './components/NewExpense/NewExpense.js';
import Expenses from './components/Expenses/Expenses'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2023, 1, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 1, 17) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2024, 1, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2024, 2, 2),
    },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;

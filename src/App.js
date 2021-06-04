import { useState } from 'react';

import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initExpenses = [
  { id: Math.random().toString(), date: new Date(2021, 2, 28), title: 'ATM Withdrawal', amount: 40.0},
  { id: Math.random().toString(), date: new Date(2021, 2, 28), title: 'Stock Withdrawal', amount: 2500.0},
  { id: Math.random().toString(), date: new Date(2021, 2, 28), title: 'Salary Deposit', amount: 7000.0},
  { id: Math.random().toString(), date: new Date(2021, 2, 28), title: 'Interest Deposit', amount: 50.0},
  { id: Math.random().toString(), date: new Date(2021, 2, 28), title: 'Paywave Payment', amount: 20.0},
  { id: Math.random().toString(), date: new Date(2021, 2, 28), title: 'Google Pay Payment', amount: 10.0}
]

function App() {
  const [expenses, setExpenses] = useState(initExpenses)

  function addExpenseHandler(newExpense){
    setExpenses((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

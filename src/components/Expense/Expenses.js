import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent = <p>No Expenses found.</p>
  if(filteredExpenses.length > 0 ){
    expenseContent =  filteredExpenses.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        amount={expense.amount} 
        title={expense.title} 
        date={expense.date} 
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      {expenseContent}
    </Card>
  );
}

export default Expenses;
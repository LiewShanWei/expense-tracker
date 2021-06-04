import './ExpensesList.css';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

//Show no Expenses found if length is 0
//Otherwise, build ExpenseItem component based on given filtered expense
function ExpensesList(props){
  if(props.expenses.length > 0 ){
    return <ul className="expenses-list">
      {
        props.expenses.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            amount={expense.amount} 
            title={expense.title} 
            date={expense.date} 
          />
        ))
			}   
    </ul>
  } else {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>
  }
};

export default ExpensesList
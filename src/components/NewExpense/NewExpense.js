import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    function startEditingHandler(){
      setIsEditing(true);
    };

    function stopEditingHandler(){
      setIsEditing(false);
    }

    function submitNewExpenseHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            {!isEditing && 
              (<button onClick={startEditingHandler}>Add New Expense</button>)}
            {isEditing && 
              (<ExpenseForm 
                onSubmitNewExpense={submitNewExpenseHandler} 
                onCancel={stopEditingHandler}>
              </ExpenseForm>)}
        </div>
    );
}

export default NewExpense;
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    function submitNewExpenseHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitNewExpense={submitNewExpenseHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;
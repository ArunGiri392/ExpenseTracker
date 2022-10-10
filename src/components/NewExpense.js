import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// import ExpensesFilter from "./ExpenseFilter";
const NewExpense = (props) =>{
    const [isEditing, setisEditing] = useState(true);
    //const [steps, setSteps] = useState(0);

    const SaveExpenseDataHandler = (enteredExpenseData) =>{
           const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
           };
           //console.log(enteredExpenseData);
           props.onAddExpense(expenseData);
           setisEditing(true);
    };
    //props.ongettingdata(enteredExpenseData);
    const showform = () => {
        setisEditing(false);
    }
    const runner = (value) => {
        console.log(value);
        setisEditing(true);
    }
    return <div className="new-expense">
      
        {isEditing === true ?
        <button onClick={showform}>Add expense</button>
        :<ExpenseForm onSaveExpenseData =  {SaveExpenseDataHandler} onclicking = {runner}></ExpenseForm>
        }
    </div>
}

export default NewExpense


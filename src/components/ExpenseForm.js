import React, {useState} from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState("");
    const [enteredAmount, setenteredAmount] = useState("");
    const [enteredDate, setenteredDate] = useState("");
    //console.log(enteredTitle);
    const titleChangeHandler = (event) =>{
        setenteredTitle(event.target.value);
        //console.log(event.target.value);
        //console.log(enteredTitle);
    }
    //console.log(enteredTitle);
    const AmountChangeHandler = (event) =>{
        setenteredAmount(event.target.value);
        //console.log(event.target.value);
        //console.log(enteredTitle);
    }
    const DateChangeHandler = (event) =>{
        setenteredDate(event.target.value);
        //console.log(event.target.value);
        //console.log(enteredTitle);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        //console.log(enteredTitle);
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        setenteredTitle("");
        setenteredAmount("");
        setenteredDate("");

        //console.log(enteredTitle);
    }

    const changingparameters = () => {
       
        props.onclicking();
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input onChange={titleChangeHandler} value={enteredTitle} type="text" ></input>
        </div>

        <div className="new-expense__control">
            <label>Amount</label>
            <input onChange={AmountChangeHandler} value={enteredAmount}  type="number" min="0.01" step="0.01"  ></input>
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input onChange={DateChangeHandler} value={enteredDate}   type="date" min="2020-01-13" max="2022-01-13" ></input>
        </div>

        </div>

        <div className="new-expense__actions">
        <button type="button" onClick = {changingparameters}>Cancel</button>

        <button type="submit"  >Add Expense</button>
       
           
        </div>
    </form>
    )
}
export default ExpenseForm
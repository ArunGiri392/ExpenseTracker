import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
const ExpenseItem = (props) =>{
        //let title = props.title;
        //const name = arun;
   const [title, setTitle] = useState(props.title);
   
     const clickHandler = ()=>{
        //title = "arun";
        //setTitle("updated!");
        setTitle("arun");
        //console.log(title);
       
     }
     //console.log(title);
        return (
        <div className="expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>

        <div className="expense-item__description">
                <h2>{title}</h2>
        </div>

        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;









import { useState } from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) =>{
      const [filteredYear, setfilteredYear] = useState("2021");
      //console.log(props.items)
      const filterChangerHandler = (selectedYear) => {
            //console.log(selectedYear);
            setfilteredYear(selectedYear);
            //console.log(filteredYear);
      }
      //console.log(filteredYear);
      const filteredExpenses =  props.items.filter( (expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
      })
      //console.log(filteredExpenses);


      return (
      <div>
      <div>
            <ExpensesFilter  selected = {filteredYear} onChangeFilter = {filterChangerHandler}> </ExpensesFilter
            >
      </div>
      
      <div className="expenses">
      {filteredExpenses.length === 0 ? <p>No anything to show</p> : 
       filteredExpenses.map((expense) => 
           
            <ExpenseItem
                  key = {expense.id}
                  title = {expense.title}
                  amount = {expense.amount}
                  date = {expense.date}
            />
            
)};

      {/* <ExpenseItem title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date} ></ExpenseItem>
      <ExpenseItem title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date}></ExpenseItem>
      <ExpenseItem title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date}></ExpenseItem>
      <ExpenseItem title = {props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date}></ExpenseItem>   */}
      


      </div>

      </div>
      )

}
export default Expenses;

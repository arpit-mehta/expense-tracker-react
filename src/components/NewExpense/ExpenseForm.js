import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {


    const[enteredTitle,changedTitle] = useState('')
    const[enteredAmount,changedAmount] = useState('')
    const[enteredDate,changedDate] = useState('')
    const[enteredLocation,changedLocation] = useState('')
    //instead using 3 different states we can also use 1 state by passing object
    // const[userInput,changedUserInput] = useState({
    //     title: '',
    //     amount:'',
    //     date:'',
    // });
    const titleChangeHandler = (event) => {
        changedTitle(event.target.value);
    } 
    const amountChangeHandler = (event) => {
        changedAmount(parseFloat(event.target.value));
    } 
    const dateChangeHandler = (event) => {
        changedDate(event.target.value);
    } 
    const locationChangeHandler = (event) => {
        changedLocation(event.target.value);
    } 
    
    // const titleChangeHandler = (event) => {
    //     // changedUserInput({
    //     //     //we need other 2 as well so that they are not lost
    //     //     //copying the previous userInput and overwriting updated data
    //     //     ...userInput,
    //     //     title : event.target.value,
    //     // })
    //     //if the state update depends on previous state then we mus use this syntax rather than above
    //     changedUserInput((prevState)=>{
    //         return {...prevState, title:event.target.value};
    //     })
    // } 
    // const amountChangeHandler = (event) => {
    //     changedUserInput({
    //         //we need other 2 as well so that they are not lost
    //         //copying the previous userInput and overwriting updated data
    //         ...userInput,
    //         amount : event.target.value,
    //     })
    // } 
    // const dateChangeHandler = (event) => {
    //     changedUserInput({
    //         //we need other 2 as well so that they are not lost
    //         //copying the previous userInput and overwriting updated data
    //         ...userInput,
    //         date : event.target.value,
    //     })
    // } 
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            location: enteredLocation,
        };
        props.onSaveExpenseData(expenseData);
        //to remove the entered form data
        changedTitle('')
        changedAmount('')
        changedDate('')
        changedLocation('')
    }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
            <label>Title</label>
            <input value = {enteredTitle} onChange={titleChangeHandler} type = 'text' />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input value = {enteredAmount} onChange={amountChangeHandler} type = 'number' min='1'/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input value = {enteredDate} onChange={dateChangeHandler} type = 'date' />
        </div>
        <div className="new-expense__control">
            <label>Location</label>
            <input value = {enteredLocation} onChange={locationChangeHandler} type = 'text' />
        </div>
      </div>
      <div className="new-expense-action-btns">
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

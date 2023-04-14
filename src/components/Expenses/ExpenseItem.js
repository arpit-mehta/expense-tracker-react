import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';


const ExpenseItem = (props) => {  
  //must only be called in component functions
  const [amount,setAmount] = useState(props.amount);
  const clickHandler = () => {
      setAmount('$100');
  }
  return (
    <div className='expense-item'>
      <ExpenseDate 
        date={props.date}
      />
      <ExpenseDetails 
        title = {props.title}
        amount = {amount}
        location = {props.location}
        />
        <button onClick={clickHandler}>Change Amount</button>
    </div>
  );
}

export default ExpenseItem;

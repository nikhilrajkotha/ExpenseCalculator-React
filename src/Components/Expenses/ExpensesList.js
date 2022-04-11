import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
function ExpensesList(props) {
      
        if(props.items.length === 0 ) {
            return <h2 className='expenses-list__fallback'> Found no expenses.</h2>
        }
       
    return ( 
        <ul className='expenses-list'>
       {props.items.map((expense) => (
        <ExpenseItem
          key={expense.description}
          Date={expense.date}
          description={expense.description}
          amount={expense.amount}
        />
      ))
    } 
    </ul>
    )

}
export default ExpensesList
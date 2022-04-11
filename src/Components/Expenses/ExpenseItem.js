import React from 'react';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {  

  //  const [desc,setDesc] = useState(props.description);

  // const clickHandler = () => {
  //   setDesc('Updated!!!');
  //   console.log("clicked");
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.Date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.description}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

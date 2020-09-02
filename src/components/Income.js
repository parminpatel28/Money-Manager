import React, { useState } from 'react';
import Invest from './Invest';

function Income() {
  
  const  [income, setIncome] = useState(0)
  const salary = income

  
  
  return (
    <div>
    <h4>Balance</h4>
    <h1>${income}</h1>

    <div className="inc-exp-container">
      <h4>Income($): </h4>
      <p id="money-plus" className="money plus" />
        <div className="form-group">
        <form>   
          <input type="text" size="10" id="incomeInput" onChange={event => setIncome(event.target.value)} />

        </form>
      </div>
    </div>
    </div>
  );
  }
  export default Income;
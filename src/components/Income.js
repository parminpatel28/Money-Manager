import React from "react";
export default Income;

const Income = () => {
  let result;
  
  return (
    <div className="inc-exp-container">
      <h4>Income: </h4>
      <p id="money-plus" className="money plus" />
        <div className="form-group">
        <form>
          
          <input type="text" size="12" id="un" /><br />
          <input type="submit" onClick="saveUn();" />
        </form>
         <h2></h2>
         
         
      </div>
    </div>
  );

  






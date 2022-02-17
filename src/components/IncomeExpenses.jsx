import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const incomes = amounts.filter((income) => income >= 0);
  const expenses = amounts.filter((expense) => expense < 0);

  const totalIncome = incomes
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpenses = expenses
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +₹{totalIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -₹{Math.abs(totalExpenses)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;

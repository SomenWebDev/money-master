// to get the input value of income and expenses
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputBudgetText = inputField.value;
  const budgetValue = parseInt(inputBudgetText);
  //   inputField.value = "";

  return budgetValue;
}
function getSavingValue() {
  const incomeAmount = getInputValue("income-input");
  console.log(incomeAmount);
  const savingsInput = document.getElementById("savings-input");
  const savingsText = savingsInput.value;
  const savingsAmount = parseInt(savingsText);
  let currentSavings = (incomeAmount * savingsAmount) / 100;
  document.getElementById("saving-total").innerText = currentSavings;
  const previousBalance = document.getElementById("balance-total");
  const previousBalanceText = previousBalance.innerText;
  const currentBalance = parseInt(previousBalanceText);
  const remainingBalance = currentBalance - currentSavings;
  document.getElementById("remaining-balance").innerText = remainingBalance;

  console.log(currentBalance);
}

document
  .getElementById("expenditure-calculator")
  .addEventListener("click", function () {
    const income = getInputValue("income-input");
    if (isNaN(income) || income < 0) {
      alert("please enter a valid number");
    }

    const foodExpense = getInputValue("food-expense");

    const rentExpense = getInputValue("rent-expense");

    const clothExpense = getInputValue("cloth-expense");

    // calculate expenses
    const totalExpense = foodExpense + rentExpense + clothExpense;
    document.getElementById("total-expense").innerText = totalExpense;

    // calculate balance
    const balance = income - totalExpense;
    document.getElementById("balance-total").innerText = balance;
  });
document
  .getElementById("savings-calculator")
  .addEventListener("click", function () {
    getSavingValue();
  });

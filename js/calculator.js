// to get the input value of income and expenses
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputBudgetText = inputField.value;
  const budgetValue = parseInt(inputBudgetText);
  //   inputField.value = "";

  return budgetValue;
}
// to get the saving amount and remaining balanced value
function getSavingValue() {
  const incomeAmount = getInputValue("income-input");

  const savingsInput = document.getElementById("savings-input");
  const savingsText = savingsInput.value;
  const savingsAmount = parseInt(savingsText);
  //   calculate savings
  let currentSavings = (incomeAmount * savingsAmount) / 100;
  document.getElementById("saving-total").innerText = currentSavings;
  const previousBalance = document.getElementById("balance-total");
  const previousBalanceText = previousBalance.innerText;
  const currentBalance = parseInt(previousBalanceText);
  //   calculate remaining balance
  const remainingBalance = currentBalance - currentSavings;
  document.getElementById("remaining-balance").innerText = remainingBalance;
}

document
  .getElementById("expenditure-calculator")
  .addEventListener("click", function () {
    const income = getInputValue("income-input");
    if (isNaN(income) || income < 0) {
      alert("please enter a valid number");
    }

    const foodExpense = getInputValue("food-expense");
    if (isNaN(foodExpense) || foodExpense < 0) {
      alert("please enter a valid number");
    }

    const rentExpense = getInputValue("rent-expense");
    if (isNaN(rentExpense) || rentExpense < 0) {
      alert("please enter a valid number");
    }

    const clothExpense = getInputValue("cloth-expense");
    if (isNaN(clothExpense) || clothExpense < 0) {
      alert("please enter a valid number");
    }

    // calculate expenses
    const totalExpense = foodExpense + rentExpense + clothExpense;
    document.getElementById("total-expense").innerText = totalExpense;
    if (totalExpense > income) {
      alert("You dont have enough money.");
    }

    // calculate balance
    const balance = income - totalExpense;
    document.getElementById("balance-total").innerText = balance;
  });
document
  .getElementById("savings-calculator")
  .addEventListener("click", function () {
    getSavingValue();
  });

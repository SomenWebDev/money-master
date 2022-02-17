// to get the input value of income and expenses
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputBudgetText = inputField.value;
  const budgetValue = parseInt(inputBudgetText);
  inputField.value = "";

  return budgetValue;
}
document
  .getElementById("expenditure-calculator")
  .addEventListener("click", function () {
    const income = getInputValue("income-input");

    const foodExpense = getInputValue("food-expense");

    const rentExpense = getInputValue("rent-expense");

    const clothExpense = getInputValue("cloth-expense");

    // calculate expenses
    const totalExpense = foodExpense + rentExpense + clothExpense;
    document.getElementById("total-expense").innerText = totalExpense;
    // calculate balance
    const balance = income - totalExpense;
    document.getElementById("balance").innerText = balance;
  });

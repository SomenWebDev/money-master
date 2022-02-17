document
  .getElementById("expenditure-calculator")
  .addEventListener("click", function () {
    const incomeInput = document.getElementById("income-input");
    const incomeText = incomeInput.value;
    const incomeAmount = parseInt(incomeText);
    incomeInput.value = "";

    const foodExpense = document.getElementById("food-expense");
    const foodExpenseText = foodExpense.value;
    console.log(foodExpenseText);
    foodExpenseAmount = parseInt(foodExpenseText);
    foodExpense.value = "";

    const rentExpense = document.getElementById("rent-expense");
    const rentExpenseText = rentExpense.value;
    const rentExpenseAmount = parseInt(rentExpenseText);
    console.log(rentExpenseAmount);
    rentExpense.value = "";

    const clothExpense = document.getElementById("cloth-expense");
    const clothExpenseText = clothExpense.value;
    const clothExpenseAmount = parseInt(clothExpenseText);
    clothExpense.value = "";
    const totalExpense =
      foodExpenseAmount + rentExpenseAmount + foodExpenseAmount;
    document.getElementById("total-expense").innerText = totalExpense;
    const balance = incomeAmount - totalExpense;
    document.getElementById("balance").innerText = balance;
  });

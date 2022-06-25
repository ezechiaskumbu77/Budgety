//jshint esversion:6
// Budget 

// BUDGET CONTROLLER 
const budgetController = (function () {

}
)();

//UI CONTROLLER
let UIController = (function () {

}
)();

// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {
  let ctrlAddItem = function () {
    // TodoLis
    // 1. Get the field input data
    // 2. Add item to the budget controller
    // 3. Add item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
    console.log("it works!")
  }
  document.querySelector('.addBtn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13 || e.which == 13) {
      ctrlAddItem();
    }
  })

})(budgetController, UIController);
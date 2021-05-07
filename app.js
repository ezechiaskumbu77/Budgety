//jshint esversion:6

// BUDGET CONTROLLER
let budgetController = (function () {
    // some code
})();


//UI CONTROLLER
let UIController = (function () {
    
    return{
        getInput: function(){
            return{
                type : document.querySelector('.addType').value, // will be either Inc and Exp
                description : document.querySelector('.addDescription').value,
                value : document.querySelctor('.addValue').value,
            };
        },
    };
})();


// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {
    // Handling Event/click and keypress
    let ctrlAddItem = function () {
        //  1. Get the filed input data
        let input = UIController.getInput();
        console.log(input);
        //  2. Add the item to the budget controller
        //  3. Add the item to the UI
        //  4. Calculate the budget
        //  15. Display the budget on the UI

    };
    document.querySelector('.addBtn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);


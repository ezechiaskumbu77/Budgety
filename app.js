//jshint esversion:6
// Budget 

// BUDGET CONTROLLER 
const budgetController = (function () {

}
)();

//UI CONTROLLER
let UIController = (function () {
  let DomStrings = {
    inputType : '.addType',
    inputDescription : '.addDescription',
    inputValue : '.addValue',
    inputBtn : '.addBtn',
  }
  return{
    getinput:function(){

      return {
         type : document.querySelector(DomStrings.inputType).value, //will be either in or exp
         description : document.querySelector(DomStrings.inputDescription).value,
         value : document.querySelector(DomStrings.inputValue).value
      };
     
    },
    getDomStrings:function(){
      return DomStrings;
    }

  }

}
)();

// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {
  let setupEventListeners = function () {
    let DOM = UICtrl.getDomStrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {
      if (e.keyCode == 13 || e.which == 13) {
        ctrlAddItem();
      }
    })

  }
  let ctrlAddItem = function () {
    // TodoLis
    // 1. Get the field input data

    let input = UICtrl.getinput()
  
    // 2. Add item to the budget controller
    // 3. Add item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
    
  }
  return {
    init: function(){
      console.log("Application has started!")
      setupEventListeners()
    }
  }

})(budgetController, UIController);

controller.init()
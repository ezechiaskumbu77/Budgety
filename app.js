//jshint esversion:6
// Budget

// BUDGET CONTROLLER
let budgetController = (function () {
  let Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let data = {
    allItems: {
      exp: [],
      inc: [],
    },

    totals: {
      exp: 0,
      inc: 0
    }
  };
  return {
    addItem: function (type, des, val){
      let newItem, ID;

      // Create new ID
      if(data.allItems[type].length > 0){
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else{
        ID = 0;
      }
      

      // Create new Item based on 'inc' or 'exp'type 
      if(type === 'exp'){
        newItem = new Expense(ID, des, val);
      }else if (type === 'inc'){
        newItem = new Income(ID, des, val);
      }
      
      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

    testing:function(){
     console.log(data)
    }
  };

})();

//UI CONTROLLER
let UIController = (function () {
  let DomStrings = {
    inputType: ".addType",
    inputDescription: ".addDescription",
    inputValue: ".addValue",
    inputBtn: ".addBtn",
  };
  return {
    getinput: function () {
      return {
        type: document.querySelector(DomStrings.inputType).value, //will be either in or exp
        description: document.querySelector(DomStrings.inputDescription).value,
        value: document.querySelector(DomStrings.inputValue).value,
      };
    },
    getDomStrings: function () {
      return DomStrings;
    },
  };
})();

// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {
  let setupEventListeners = function () {
    let DOM = UICtrl.getDomStrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (e) {
      if (e.keyCode == 13 || e.which == 13) {
        ctrlAddItem();
      }
    });
  };
  let ctrlAddItem = function () {
   
    // TodoLis
    // 1. Get the field input data

    let input = UICtrl.getinput();

    // 2. Add item to the budget controller
     let newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    // 3. Add item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };
  return {
    init: function () {
      console.log("Application has started!");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();

'use strict';

console.log(calculatorModule);

var cashRegisterModule = (function () {

  var registerInterface = (function() {

    //var displayValue = [];

    // var _executeOperation = function(inDisplayValue, operationName) {

      // var out = "Error!";

      // switch (operationName) {

      //   case "add":

      //     out = calculatorModule.add(inDisplayValue);

      //     break;
      //   case "divide":

      //     out = calculatorModule.divide(inDisplayValue);

      //     break;
      //   case "multiply":

      //     out = calculatorModule.multiply(inDisplayValue);

      //     break;

      //   case "subtract":

      //     out = calculatorModule.subtract(inDisplayValue);

      //     break;

      //   case "execute":


      //     break;

      //   };

      //   _updateDisplay(out);
    // };

    var _clear = function() {

      _updateDisplay("0");

    };

    var _updateDisplay = function(value) {

      //displayValue = value.split("");

      //push displayValue to display field

    };

    var _addCharToDisplay = function(oldValue, newValue) {

      oldValue += newValue;

      _updateDisplay(oldValue);

    };

    return {

      // addValue: _addValue,
      // executeOperation: _executeOperation,
      clear: _clear,
      updateDisplay: _updateDisplay,
      addCharToDisplay: _addCharToDisplay

    };

  };);

  var registerLogic = (function() {

    var balance = 0;

    var executeOperation = function(inputString) {

      var out = "Error! Could not process input.";

      var index = -1;
      var left;
      var right;

      if(inputString.indexOf("+") {

        index = inputString.indexOf("+");
        left = parseInt(inputString.slice(0,index),10);
        right = parseInt(inputString.slice(index + 1),10);

        calculatorModule.load()


      } else if (inputString.indexOf("-")) {

        index = inputString.indexOf("+");
        left = parseInt(inputString.slice(0,index), 10);
        right = parseInt(inputString.slice(index + 1), 10);

      } else if (inputString.indexOf("*")) {

        index = inputString.indexOf("+");
        left = parseInt(inputString.slice(0,index),10);
        right = parseInt(inputString.slice(index + 1),10);

      } else if (inputString.indexOf("/")) {

        index = inputString.indexOf("+");
        left = parseInt(inputString.slice(0,index),10);
        right = parseInt(inputString.slice(index + 1),10);

      };

      return out;
    };

    var _getBalance = function() {

      registerInterface.updateDisplay("Balance: " + balance);
    };

    var _deposit = function(number) {

      balance += number;
      registerInterface.updateDisplay("New balance: " + balance);
    };

    var _withdraw = function(number) {

      if(number > balance) {

        registerInterface.updateDisplay("Insufficient funds!");
      };

      balance -= number;
      registerInterface.updateDisplay("New balance: " + balance);
    };

    return {

      executeOperation: _executeOperation,
      getBalance: _getBalance,
      deposit: _deposit,
      withdraw: _withdraw

    };

  };);


})();
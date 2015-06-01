'use strict';

window.cashRegisterModule = {

  registerInterface: (function() {

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

  })(),

  registerLogic: (function() {

    var balance = 0;

    var _executeOperation = function(inputString) {

      inputString = inputString.toString();
      var out = "Error! Could not process input.";
      var index;
      var left;
      var right;



      if(inputString.indexOf("+") > -1) {

        index = inputString.indexOf("+");
        left = parseFloat(inputString.slice(0,index));
        right = parseFloat(inputString.slice(index + 1));

        calculatorModule.load(left);
        out = calculatorModule.add(right);


      } else if (inputString.indexOf("-") > -1) {

        index = inputString.indexOf("-");
        left = parseFloat(inputString.slice(0,index));
        right = parseFloat(inputString.slice(index + 1));

        calculatorModule.load(left);
        out = calculatorModule.subtract(right);

      } else if (inputString.indexOf("*") > -1) {

        index = inputString.indexOf("*");
        left = parseFloat(inputString.slice(0,index));
        right = parseFloat(inputString.slice(index + 1));

        calculatorModule.load(left);
        out = calculatorModule.multiply(right);

      } else if (inputString.indexOf("/") > -1) {

        index = inputString.indexOf("/");
        left = parseFloat(inputString.slice(0,index));
        right = parseFloat(inputString.slice(index + 1));

        calculatorModule.load(left);
        out = calculatorModule.divide(right);

      };

      return out;
    };

    var _getBalance = function() {

      return "Balance: " + balance;
    };

    var _deposit = function(number) {

      number = _convertToNumber(number);

      console.log(balance);
      console.log(number);

      balance += number;
      return "New balance: " + balance;
    };

    var _withdraw = function(number) {

      number = _convertToNumber(number);

      if(number > balance) {

        return "Insufficient funds!";
      };

      balance -= number;
      return "New balance: " + balance;
    };

    var _convertToNumber = function(string) {

      return parseFloat(string);
    };

    return {

      executeOperation: _executeOperation,
      getBalance: _getBalance,
      deposit: _deposit,
      withdraw: _withdraw

    };

  })()


};
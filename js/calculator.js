/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

window.calculatorModule = (function () {

  var memory = 0;
  var total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  var _load = function(newNumber) {

    var valid = _isValid(newNumber);

    if(valid !== true) {

      return valid;
    };

    total = newNumber;

    return total;
  };


  /**
   * Return the value of `total`
   * @return { Number }
   */

  var _getTotal = function() {

    return total;
  };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   var _add = function(newNumber) {

    var valid = _isValid(newNumber);

    if(valid !== true) {

      return valid;
    };

    total += newNumber;

    return total;
   };


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  var _subtract = function(newNumber) {

    var valid = _isValid(newNumber);

    if(valid !== true) {

      return valid;
    };

    total -= newNumber;

    return total;
  };


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  var _multiply = function(newNumber) {

    var valid = _isValid(newNumber);

    if(valid !== true) {

      return valid;
    };

    total = total * newNumber;

    return total;
  };


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  var _divide = function(newNumber) {

    var valid = _isValid(newNumber);

    if(valid !== true) {

      return valid;
    };

    total = total/newNumber;

    return total;
  };


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  var _recallMemory = function() {

    return memory;
  };


  /**
   * Stores the value of `total` to `memory`
   */
  var _saveMemory = function() {

    memory = total;

    return memory;
  };


  /**
   * Clear the value stored at `memory`
   */
  var _clearMemory = function() {

    memory = 0;
  };

  /**
   * Validation
   */

  var _isValid = function(testNumber) {

    if( typeof testNumber === "number" ||
        typeof testNumber !== "NaN" ||
        typeof testNumber !== "Infinity" ||
        typeof testNumber !== "-Infinity") {

      return true;
    };

    return "Invalid input!";
   };

  return {

    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _recallMemory,
    saveMemory: _saveMemory,
    clearMemory: _clearMemory
  };
})();



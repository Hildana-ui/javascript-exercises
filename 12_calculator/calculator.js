const add = function(a , b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
	let sum = 0;
  for (i = 0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let product =  1;
  for (i = 0; i<arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(n) {
	if (n === 0 || n === 1){
    return 1;
  }
  return n * factorial(n-1);
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

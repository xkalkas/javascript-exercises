const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum+current, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, current) => total*current, 1);
};

const power = function(base, expo) {
	let result = 1;
	for(let i=0; i<expo; i++){
    result =result * base;
  }
  return result;
};

const factorial = function(n) {
  if (n===0 || n===1) return 1;
  let result = 1;
  while(n){
    result *= n;
    n--;
  }
  return result;
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

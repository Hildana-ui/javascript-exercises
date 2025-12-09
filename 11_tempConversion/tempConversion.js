const convertToCelsius = function(fahrenheit) {
  const celsius = 5/9 * (fahrenheit - 32);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (9/5 * celsius) + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

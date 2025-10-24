const convertToCelsius = function(x) {
  let celc = (x-32)/1.8;
  celc = Math.round(celc*10)/10;
  return celc;
};

const convertToFahrenheit = function(z) {
  let far = (z*1.8)+32;
  far = Math.round(far*10)/10;
  return far;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

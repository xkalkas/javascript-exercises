const repeatString = function(string, num) {
  let repeatStr=""
  if(num<0){
    return string="ERROR"
  }
  while(num>0){
    repeatStr = repeatStr + string;
    num--;
  }
  return repeatStr
};

// Do not edit below this line
module.exports = repeatString;

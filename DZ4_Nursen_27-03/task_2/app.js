function checkDataType(argument) {
  var dataType = typeof argument;
  return dataType;
}

var value = "abc";
var result = checkDataType(value);
console.log(result);
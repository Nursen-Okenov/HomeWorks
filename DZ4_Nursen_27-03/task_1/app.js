function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // Если не передано чисел, возвращаем 0
  }

  var sum = numbers.reduce((num1, num2) => num1 + num2, 0);
  var average = sum / numbers.length;
  return average;
}

var numbers = [10, 20, 30, 40, 50];
var result = calculateAverage(numbers);
console.log(result);


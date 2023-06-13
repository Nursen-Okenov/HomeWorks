var numbers = [10, 20, 30, 50, 235, 30006, 5000439857];

for (var i = 0; i < numbers.length; i++){
    var indexOfNumber = numbers[i].toString();
    if (indexOfNumber.startsWith('1') || indexOfNumber.startsWith('2') || indexOfNumber.startsWith('5')) {
        console.log(indexOfNumber);
    }
}
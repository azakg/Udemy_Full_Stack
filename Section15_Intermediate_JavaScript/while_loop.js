var numberList = [];
var temp = 1;
function fizzBuzz() {
    var count = 0;
    while (count < 100) {
        if (temp % 3 === 0) {
            if (temp % 5 === 0) {
                numberList.push("FizzBuzz");
                temp++;
            }
            else {
                numberList.push("Fizz");
                temp++;
            }

        }
        if (temp % 5 === 0) {
            numberList.push("Buzz");
            temp++;
        }
        else {
            numberList.push(temp);
            temp++;
        }
        
        count++;
    }
    console.log(numberList);
    
}
fizzBuzz();
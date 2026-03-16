var numberList = [];
var temp = 1;
function fizzBuzz(){
    if (temp%3 === 0){
        if (temp%5===0) {
            numberList.push("FizzBuzz");
         temp++;
        }
        else{
            numberList.push("Fizz");
         temp++;
        }
        
    }
    if (temp%5===0){
        numberList.push("Buzz");
         temp++;
    }
    else{
        numberList.push(temp);
         temp++;
    }
    console.log(numberList);
}
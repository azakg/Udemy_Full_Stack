var firstName = prompt("Type first name: ");
var secondName = prompt("Type secong name: ");
var rNumber = Math.random();
var n = rNumber*100+1;

if (n > 70){
    alert(firstName + " matches to " + secondName + " for " + Math.floor(n)+"%. this is truly love");
} 
if (n > 30 && n < 70){
    alert(firstName + " matches to " + secondName + " for " + Math.floor(n)+"%.");
}
if (n <=30){
    alert(firstName + " and " + secondName + " is like oil and water. Your love score is: " + Math.floor(n)+"%.");
}

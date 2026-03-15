var firstName = prompt("Type first name: ");
var secondName = prompt("Type secong name: ");
var rNumber = Math.random();
var n = rNumber*100+1;

if (n > 70){
    alert(firstName + " matches to " + secondName + " for " + Math.floor(n)+"%. this is truly love");
} else {
    alert(firstName + " matches to " + secondName + " for " + Math.floor(n)+"%.");
}

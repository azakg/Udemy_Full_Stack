var guestList = ["Azamat", "Nurzhamal", "Tamchy", "Altai", "Adam"];
var guestName = prompt("Type your name, we will check it is it in the list: ");
if (guestList.includes(guestName)){
    alert("Welcome dear "+guestName+"!");
}
else{
    alert("Sorry you'r not in the list.");
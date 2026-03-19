
var numberOfDromBottons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDromBottons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        alert("I got clicked!");
    });
}

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var nu1 = nextSequence();



function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}


var randomChosenColour = buttonColours[nu1];
gamePattern.push(buttonColours[nextSequence()]);


// console.log(randomChosenColour);
// $("btn "+randomChosenColour).on("click", function(){
//     $("h1").animate({opacity: 0.5});
// })
console.log(randomChosenColour);
console.log(nu1);
$("."+randomChosenColour).on("click", function(){
    $("."+randomChosenColour).animate({opacity: 0.5});
    setTimeout($("."+randomChosenColour).animate({opacity: 1}), 50);
    var audio = new Audio("./sounds/"+randomChosenColour+'.mp3');
    audio.play();
})

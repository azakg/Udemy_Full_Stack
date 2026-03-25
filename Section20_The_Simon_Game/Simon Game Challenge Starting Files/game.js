//##############################################################################
//Initial 
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var nu1 = nextSequence();

var randomChosenColour = buttonColours[nu1];
gamePattern.push(buttonColours[nextSequence()]);

var userChosenColour = [];

//##############################################################################
// Functions
// Random number
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}
// Play audio
function audioPlay(path){
    var audio = new Audio(path);
    audio.play();
}


//#######################################################################################################################
// Fill var userChosenColour = []
$(".btn").click(function(){
userChosenColour.push($(this).attr("id"));
console.log(userChosenColour);
});



//#######################################################################################################################
// Button click animation
$("."+randomChosenColour).on("click", function(){
    $("."+randomChosenColour).animate({opacity: 0.5});
    setTimeout($("."+randomChosenColour).animate({opacity: 1}), 50);

    audioPlay("./sounds/"+randomChosenColour+'.mp3');// play sound

})

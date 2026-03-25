//##############################################################################
//Initial 
var buttonColours = ["red", "blue", "green", "yellow"];

var userChosenColour = [];


var randomChosenColorList = [];
var gameLavels = 5;

//#######################################################################################################################
// Game Logic
document.addEventListener("keypress", function(event){
    if(event ==='a'){
    }

    
});

 $(".btn").on("click", buttonAnimationAudio("green"));



//##############################################################################
// Functions
// Random number
for(var i = 0; i < gameLavels; i++){
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColorList.push(buttonColours[randomNumber]);
}


// Play audio
function audioPlay(path){
    var audio = new Audio(path);
    audio.play();
}

//Button Animation&Audio
function buttonAnimationAudio(color){
   
    $("."+color).animate({opacity: 0.5});
    setTimeout($("."+color).animate({opacity: 1}), 50);

    audioPlay("./sounds/"+color+'.mp3');// play sound
}


//#######################################################################################################################
// Fill var userChosenColour = []
$(".btn").click(function(){
userChosenColour.push($(this).attr("id"));
console.log(userChosenColour);
});



//#######################################################################################################################
// Button click animation
// $("."+randomChosenColour).on("click", function(){
//     $("."+randomChosenColour).animate({opacity: 0.5});
//     setTimeout($("."+randomChosenColour).animate({opacity: 1}), 50);

//     audioPlay("./sounds/"+randomChosenColour+'.mp3');// play sound

// })


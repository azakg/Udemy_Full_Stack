$("h1").addClass("big-title margin-50");
$("button").eq(0).text("Hi");

$("button").eq(0).click(function () {
    if ($("img").attr("src") === "./images/tom2.png") {
        $("img").attr("src", "./images/tom1.png");
    }
    else {
        $("img").attr("src", "./images/tom2.png");
    }
});

// $("h1").click(function (){
//     if($("h1"))
//     $("h1").removeClass("big-title");
// })

$("body").keypress(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});
$("h1").on("mouseout", function(){
    $("h1").css("color", "green");
});

$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");